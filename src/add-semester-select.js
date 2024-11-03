function getCookieValue() {
    const cookieSelector = 'input[name="COOKIE"]';
    const cookieValue = document.querySelector(cookieSelector).value;
    return cookieValue;
}

function getCurrentYearAndSemester() {
    const selector = 'input[name="SEM"]';
    const yearSemesterValues = Array
        .from(document.querySelectorAll(selector))
        .map(el => el.value)
        .sort();
    console.assert(2 <= yearSemesterValues.length && yearSemesterValues.length <= 4);
    // One of the values is the previous one, skip it and we get the current.
    const current = yearSemesterValues[1];
    const year = current.slice(0, 4);
    const semester = current.slice(5);

    return { year, semester };
}

function onGoButtonClick({ year, semester }) {
    console.log('onGoButtonClick', year, semester);
}

function createSemesterSelect() {
    const { year, semester } = getCurrentYearAndSemester();

    const yearEl = document.createElement('input');
    yearEl.name = 'year';
    yearEl.type = 'number';
    yearEl.value = year;
    
    const semesterEl = document.createElement('select');
    semesterEl.name = 'semester';
    const option1 = document.createElement('option');
    option1.value = '1';
    option1.innerHTML = 'Winter';
    semesterEl.appendChild(option1);
    const option2 = document.createElement('option');
    option2.value = '2';
    option2.innerHTML = 'Spring';
    semesterEl.appendChild(option2);
    const option3 = document.createElement('option');
    option3.value = '3';
    option3.innerHTML = 'Summer';
    semesterEl.appendChild(option3);
    semesterEl.value = semester;

    const goButton = document.createElement('input');
    goButton.type = 'image';
    goButton.src = '/Images/StudImages/next.gif';
    goButton.onclick = () => {
        const next = {
            year: yearEl.value,
            semester: semesterEl.value,
        };
        onGoButtonClick(next);
    };

    const el = document.createElement('div');
    el.className = 'semester-select';
    el.appendChild(goButton);
    el.appendChild(semesterEl);
    el.appendChild(yearEl);

    return el;
}

document.body.appendChild(createSemesterSelect());


/*
semesterSelect.innerHTML = `
    <form action="grades.cgi" method="post">
        <input type="hidden" name="COOKIE" value="${cookieValue}">
        <input type="hidden" name="SEM" value="202303">
        <input type="image" src="/Images/StudImages/next.gif" border="0" alt="Previous Semester" onfocus="this.blur()">
    </form>
`;
*/
