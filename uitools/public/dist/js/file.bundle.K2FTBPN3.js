(() => {
  // ../frontend/frontend/public/js/client_scripts/file.bundle.js
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
})();
//# sourceMappingURL=file.bundle.K2FTBPN3.js.map
