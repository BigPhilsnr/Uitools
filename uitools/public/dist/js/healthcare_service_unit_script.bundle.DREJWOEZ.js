(() => {
  // ../frontend/frontend/public/js/client_scripts/healthcare_service_unit_script.bundle.js
  var api = ({method, args = {}}) => new Promise((resolve, reject) => frappe.call({method, args, callback: ({message}) => resolve(message), error: reject}));
  frappe.ui.form.on("Healthcare Service Unit", {
    refresh(frm) {
      frm.add_custom_button("Allow Inpatient", () => {
        api({
          method: "clinical.utils.update_healthcare_service_unit_inpatient_status",
          args: {
            name: frm.doc.name
          }
        }).then(({name}) => {
          frm.refresh();
          frappe.show_alert({
            message: `Saved Successfully`,
            indicator: "green"
          }, 5);
        });
      });
      frm.add_custom_button("Allow Appointments", () => {
        api({
          method: "clinical.utils.update_healthcare_service_unit_appointments",
          args: {
            name: frm.doc.name
          }
        }).then(({name}) => {
          frm.refresh();
          frappe.show_alert({
            message: `Saved Successfully`,
            indicator: "green"
          }, 5);
        });
      });
      frm.add_custom_button("Update Fields", () => {
        let dialog = new frappe.ui.Dialog({
          title: `Update ${frm.doc.name}`,
          fields: [
            {
              label: "Service Unit Type",
              fieldname: "service_unit_type",
              fieldtype: "Link",
              options: "Healthcare Service Unit Type",
              default: frm.doc.service_unit_type
            },
            {fieldtype: "Section Break", label: ""},
            {
              label: "Allow Appointments",
              fieldname: "allow_appointments",
              fieldtype: "Check",
              default: frm.doc.allow_appointments
            },
            {
              label: "Allow Overlap",
              fieldname: "overlap_appointments",
              fieldtype: "Check",
              default: frm.doc.overlap_appointments
            },
            {fieldtype: "Column Break"},
            {
              label: "Inpatient Occupancy",
              fieldname: "inpatient_occupancy",
              fieldtype: "Check",
              default: frm.doc.inpatient_occupancy
            },
            {
              label: "Bill Every Encounter",
              fieldname: "bill_for_every_encounter",
              fieldtype: "Check",
              default: frm.doc.bill_for_every_encounter
            },
            {fieldtype: "Section Break", label: ""},
            {
              label: "Warehouse",
              fieldname: "warehouse",
              fieldtype: "Link",
              options: "Warehouse",
              default: frm.doc.warehouse
            },
            {
              label: "Custom Warehouse",
              fieldname: "custom_warehouse",
              fieldtype: "Link",
              options: "Warehouse",
              default: frm.doc.custom_warehouse
            },
            {fieldtype: "Section Break", label: ""},
            {
              label: "Radiology HL7 Destination",
              fieldname: "radiology_hl7_destination",
              fieldtype: "Link",
              options: "HL7 Destination",
              default: frm.doc.radiology_hl7_destination
            },
            {fieldtype: "Column Break"},
            {
              label: "Lab HL7 Destination",
              fieldname: "lab_hl7_destination",
              fieldtype: "Link",
              options: "HL7 Destination",
              default: frm.doc.lab_hl7_destination
            },
            {fieldtype: "Section Break", label: ""},
            {
              label: "Billing Department",
              fieldname: "occupancy_status",
              fieldtype: "Link",
              options: "Department",
              default: frm.doc.occupancy_status
            },
            {fieldtype: "Column Break"},
            {
              label: "Occupancy Status",
              fieldname: "occupancy_status",
              fieldtype: "Select",
              options: ["Occupied", "Vacant"],
              default: frm.doc.occupancy_status
            }
          ],
          primary_action_label: "Submit",
          primary_action: (values) => {
            console.log(values);
            frm.set_value(values);
            frm.set_value({
              "allow_appointment": values.allow_appointments
            });
            frm.set_value({
              "service_unit_type": values.service_unit_type
            });
            frm.set_value({
              "custom_warehouse": values.custom_warehouse
            });
            frm.dirty();
            frm.save();
          },
          secondary_action_label: "Cancel",
          secondary_action: (values) => {
            dialog.hide();
          }
        });
        dialog.show();
      });
    },
    inpatient_standing_charges_add(frm) {
      frm.set_query("item", "inpatient_standing_charges", function(doc, cdt, cdn) {
        return {
          filters: {
            is_stock_item: 0,
            has_variants: 0,
            variant_of: ["!=", ""]
          }
        };
      });
    }
  });
  frappe.ui.form.on("File", {
    refresh: function(frm) {
      frm.add_custom_button("Preview", () => {
        let d = new frappe.ui.Dialog({
          title: `File Preview`,
          fields: [{
            label: "Preview",
            fieldname: "preview",
            fieldtype: "Read Only"
          }],
          primary_action_label: "Close",
          primary_action(values) {
            d.hide();
          }
        });
        d.set_values({
          preview: `<embed src="${frm.doc.file_url}" width="900px" height="800px" />`
        });
        d.show();
        d.$wrapper.find(".modal-content").css("width", "1000px");
        d.$wrapper.find(".modal-content").css("height", "700px");
        d.$wrapper.find(".modal-content").css("margin-left", "-250px");
      });
    }
  });
  frappe.ui.form.on("Lab Test", {
    refresh: function(frm) {
      if (frm.doc.workflow_state === "Awaiting Checkin") {
        frm.set_intro("Action to awaiting payment to proceed. For inpatient click the Re-Evaluate Payments");
        frm.set_intro("Please action on all test(s) that have been paid for", "red");
      }
      if (frm.doc.status === "Cancelled") {
        frm.set_intro("This test has been cancelled, check the comments for reason of cancellation");
      }
      frm.toggle_reqd("employee", frm.doc.workflow_state === "Processing");
      frm.toggle_reqd("employee", frm.doc.workflow_state === "To Receive");
      frm.add_custom_button("Re-Evaluate Payments/Emergency/Inpatient", () => {
        api({
          method: "billing.billing.api.sales_invoice.create_sales_invoice.re_eveluate_sales_orders",
          args: {
            patient_name: frm.doc.patient,
            lab_name: frm.doc.name
          }
        }).then(() => {
          frm.reload_doc();
        });
      });
      frm.change_custom_button_type("Re-Evaluate Payments/Emergency/Inpatient", null, "primary");
      if (frappe.user_roles.includes("Physician") || frappe.user_roles.includes("Administrator") || frappe.user_roles.includes("Support Team Master") || frappe.user_roles.includes("Laboratory User")) {
        if (frm.doc.workflow_state === "Awaiting Checkin" || frm.doc.workflow_state === "Awaiting Payment" || frm.doc.workflow_state === "Awaiting Payment" || frm.doc.workflow_state === "Awaiting Sampling") {
          frm.add_custom_button("Cancel Test", () => {
            frappe.confirm("Are you sure you want to proceed?", () => {
              frappe.prompt([{
                label: "Reason For Cancellation",
                fieldname: "comment",
                fieldtype: "Text",
                reqd: 1
              }], (values) => {
                api({
                  method: "clinical.api.patient_encounter.patient_encounter.cancel_lab_test",
                  args: {
                    lab_name: frm.doc.name,
                    comment: values.comment
                  }
                }).then(() => {
                  frm.reload_doc();
                });
              });
            });
          });
          frm.change_custom_button_type("Cancel Test", null, "danger");
        }
      } else {
      }
    }
  });
  frappe.ui.form.on("Lab Test", "processing_lab", function(frm, cdt, cdn) {
    if (frm.is_dirty()) {
      frm.save();
    }
  });
  frappe.ui.form.on("Lab Test", "employee", function(frm, cdt, cdn) {
    if (frm.is_dirty()) {
      frm.save();
    }
  });
  frappe.ui.form.on("Patient Encounter", {
    refresh: function(frm) {
      frm.add_custom_button("Re-Create Labs", () => {
        api({
          method: "clinical.api.patient_encounter.patient_encounter.re_create_lab_test",
          args: {
            encounter_name: frm.doc.name
          }
        }).then(() => {
          frm.reload_doc();
        });
      });
    }
  });
})();
//# sourceMappingURL=healthcare_service_unit_script.bundle.DREJWOEZ.js.map
