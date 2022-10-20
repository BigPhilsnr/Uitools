(() => {
  // ../frontend/frontend/public/js/client_scripts/patient_script.bundle.js
  frappe.ui.form.on("Patient", {
    onload_post_render(frm) {
      frm.remove_custom_button("Invoice Patient Registration");
    },
    refresh(frm) {
      if (frm.doc.status == "Disabled") {
        frm.add_custom_button(__("Waive Patient Registration"), function() {
          let d = new frappe.ui.Dialog({
            title: "Waive Confirmation",
            fields: [
              {
                label: "Enter the reason(s) for waiving this patient's registration fee",
                fieldname: "reasons",
                fieldtype: "Small Text"
              }
            ],
            primary_action_label: "Submit",
            primary_action(values) {
              frappe.call({
                method: "clinical.api.patients.waive_patient_registration",
                args: {
                  patient: frm.doc.name,
                  reasons: values.reasons
                },
                callback: function(r) {
                  frm.reload_doc();
                  d.hide();
                }
              });
            }
          });
          d.show();
        });
      } else {
      }
      if (frm.doc.__islocal == 1) {
      } else {
        frm.toggle_display("external_file_search", false);
      }
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
//# sourceMappingURL=patient_script.bundle.YNAXULH5.js.map
