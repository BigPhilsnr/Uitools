(() => {
  // ../frontend/frontend/public/js/client_scripts/doctor.bundle.js
  frappe.ui.form.on("Practitioner Service Unit Schedule", "onload", function(frm) {
    frm.set_query("service_unit", function() {
      return {
        "filters": {
          "is_group": 1
        }
      };
    });
  });
  frappe.ui.form.on("Healthcare Practitioner", {
    refresh: (frm) => {
      frm.set_query("service_unit", "practitioner_schedules", function() {
        return {
          filters: {
            "is_group": 1,
            "allow_appointments": true
          }
        };
      });
    }
  });
})();
//# sourceMappingURL=doctor.bundle.6VYO7ITS.js.map
