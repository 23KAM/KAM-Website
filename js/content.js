var app = new Vue({
    el: '#app',
    data: {
        firstname: 'Dr Katharine A.M.',
        surname: 'Wright',
        address: 'School of Geography, Politics and Sociology · Newcastle University · NE1 7RU',
        telephone: '+44 191 208 023',
        email: 'katharine.a.m.wright@newcastle.ac.uk',
        emailLink: 'mailto:katharine.a.m.wright@newcastle.ac.uk',

        teaching: {
            title: 'teaching',
            imgAlt: 'Katharine teaching',
            paragraphs: [
                'I am passionate about learning and teaching and have taught on a broad range of Politics and International Relations modules at both undergraduate and postgraduate level across three very different institutions. I currently lead a Security Studies module. ',

                'My approach to teaching is grounded in the belief that students should be actively involved in their own learning. I draw extensively on the problem based approach, for example simulations, to enable students to connect theoretical concepts with empirical reality. I have been involved with a number of student projects giving undergraduates an insight into the research process.',

                'I am a Fellow of the Higher Education Academy, and have a PgCert in Learning and Teaching in Higher Education (PGCAP) with distinction.'
            ]
        }
    }
})