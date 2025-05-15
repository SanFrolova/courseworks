function clearForm() {

        console.log('Clearing form...'); 
        document.getElementById('fullName').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('problem').value = '';
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            console.log(`Clearing checkbox ${checkbox.name}`);
            checkbox.checked = false;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mediationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            full_name: document.getElementById('fullName').value,
            phone: document.getElementById('phone').value,
            contact_methods: {
                telegram: document.querySelector('input[name="telegram"]').checked,
                facebook: document.querySelector('input[name="facebook"]').checked,
                whatsapp: document.querySelector('input[name="whatsapp"]').checked
            },
            problem_description: document.getElementById('problem').value
        };

        const xmlDoc = document.implementation.createDocument("", "", null);
        const root = xmlDoc.createElement("mediation_requests");
        xmlDoc.appendChild(root);
        
        const request = xmlDoc.createElement("request");
        root.appendChild(request);
        
        const fullName = xmlDoc.createElement("full_name");
        fullName.textContent = formData.full_name;
        request.appendChild(fullName);
        
        const phone = xmlDoc.createElement("phone");
        phone.textContent = formData.phone;
        request.appendChild(phone);
        
        const contactMethods = xmlDoc.createElement("contact_methods");
        request.appendChild(contactMethods);
        
        const telegram = xmlDoc.createElement("telegram");
        telegram.textContent = formData.contact_methods.telegram;
        contactMethods.appendChild(telegram);
        
        const facebook = xmlDoc.createElement("facebook");
        facebook.textContent = formData.contact_methods.facebook;
        contactMethods.appendChild(facebook);
        
        const whatsapp = xmlDoc.createElement("whatsapp");
        whatsapp.textContent = formData.contact_methods.whatsapp;
        contactMethods.appendChild(whatsapp);
        
        const problem = xmlDoc.createElement("problem_description");
        problem.textContent = formData.problem_description;
        request.appendChild(problem);

        const serializer = new XMLSerializer();
        const xmlString = serializer.serializeToString(xmlDoc);

        const blob = new Blob([xmlString], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'form_data.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        clearForm();
       
        alert('Your request has been submitted successfully!');
    });
}); 