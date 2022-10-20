(() => {
  // ../frontend/frontend/public/js/client_scripts/sales_invoice.bundle.js
  frappe.ui.form.on("Sales Invoice", {
    refresh: function(frm) {
      frm.set_df_property("items", "read_only", 0);
    }
  });
})();
//# sourceMappingURL=sales_invoice.bundle.3PLYJCSA.js.map
