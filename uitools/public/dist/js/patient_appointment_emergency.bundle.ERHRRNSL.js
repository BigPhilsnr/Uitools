(() => {
  // ../frontend/frontend/public/js/client_scripts/patient_appointment_emergency.bundle.js
  frappe.ui.form.on("Patient Appointment", {
    refresh: (frm) => {
      if (!frm.doc.is_emergency) {
        frm.add_custom_button("Mark as emergency", () => {
          frm.set_value("is_emergency", 1);
          frm.set_value("turned_up", 1);
          frm.save();
          frm.refresh();
        });
      }
    }
  });
  frappe.ui.form.on("Sales Invoice", {
    refresh: function(frm) {
      frm.set_df_property("items", "read_only", 0);
    }
  });
  frappe.ui.form.on("Sales Order", {
    refresh: function(frm) {
      frm.set_df_property("items", "read_only", 1);
    }
  });
})();
//# sourceMappingURL=patient_appointment_emergency.bundle.ERHRRNSL.js.map
