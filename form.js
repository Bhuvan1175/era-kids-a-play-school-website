document.addEventListener('DOMContentLoaded', () => {
    const selectSchool = document.getElementById('SelectSchool');
    const subOptions = document.getElementById('SubOptions');
    const selectedOption = document.getElementById('selectedOption');

    // Options for "ERA Kids a Play School"
    const eraKidsOptions = [
        { value: 'class1', text: 'PlayGroup' },
        { value: 'class2', text: 'Nursery' },
        { value: 'class3', text: 'Junior Kg' },
        { value: 'class4', text: 'Senior Kg' }

    ];

    // Options for "ERA International School"
    const eraInternationalOptions = [
        { value: 'grade1', text: 'Grade 1' },
        { value: 'grade2', text: 'Grade 2' },
        { value: 'grade3', text: 'Grade 3' },
        { value: 'grade4', text: 'Grade 4' },
        { value: 'grade5,', text: 'Grade 5' },
        { value: 'grade6', text: 'Grade 6' },
        { value: 'grade7', text: 'Grade 7' },
        { value: 'grade8', text: 'Grade 8' }
    ];


    selectSchool.addEventListener('change', (event) => {
        const value = event.target.value;
        const text = event.target.options[event.target.selectedIndex].text;



        // Clear existing options
        subOptions.innerHTML = '<option value="" disabled selected>Select an option</option>';

        let options = [];
        if (value === 'option1') {
            options = eraKidsOptions;
        } else if (value === 'option2') {
            options = eraInternationalOptions;
        }

        // Populate sub-options
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            subOptions.appendChild(opt);
        });
    });
});
