(() => {
  // ../frontend/frontend/public/js/client_scripts/lab_test.bundle.js
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
})();
//# sourceMappingURL=lab_test.bundle.5LC2MCJQ.js.map
