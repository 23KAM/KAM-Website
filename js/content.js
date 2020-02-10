var app = new Vue({
    el: '#app',
    data: {
        firstname: 'Dr Katharine A.M.',
        surname: 'Wright',
        address: 'School of Geography, Politics and Sociology · Newcastle University · NE1 7RU',
        telephone: '+44 191 208 023',
        email: 'katharine.a.m.wright@newcastle.ac.uk',

        about: {
            title: 'teaching',
            paragraphs: [
                "I am a Lecturer (Asst. Prof) in International Politics at Newcastle University (UK). My research interests focus on gender and security in institutional settings, with a focus on NATO and EU foreign and security policy. I've also published on Brexit, along with gender and the research process.",

                'My book <a href="https://www.militarygender.com/">NATO, Gender and the Military: Women organising from within</a> (co-authored with Matthew Hurley and Jesus Ignacio Gil Ruiz). Drawing on recently declassified NATO documents, the book argues that NATO has been concerned with gender issues long before the Women, Peace and Security agenda. I have published widely in both leading peer-reviewed academic journals and blogs. ',

                'I have been interviewed on both radio and television and I am always happy to talk to the media about any issue which intersects with my research.',

                'My current research examines how diverging actors (NATO and civil society) engage with the Women, Peace and Security agenda and their perceptions of each other, a critical engagement with feminist foreign policy, and the EU as a gender actor in external affairs. I use a variety of methods in my research including elite interviews and content analysis.'
            ]
        },

        projects: {
            title: 'research',

            projectList: [
                {
                    title: 'Gender and NATO',
                    img: 'gendernato.jpg',
                    decription: "This research examines NATO as a gendered institution, including NATO's engagement with the Women, Peace and Security agenda",
                    publications: [
                        {
                            type: 'book',
                            authors: 'Wright, K A M., Hurley, M and Gil Ruiz, J. I.',
                            year: '2019',
                            title: 'NATO, Gender and the Military: Women Organising from within',
                            url: 'http://www.militarygender.com/',
                            publisher: 'London: Routledge',
                            description: 'The book was launched at NATO HQ in June 2019 with the NATO Secretary General presented with a copy, and was followed by a panel discussion at the Irish Embassy in Brussels co-hosted with WiiS.'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Telling NATO’s Story of Afghanistan: gender and the alliance’s digital diplomacy',
                            url: 'https://journals.sagepub.com/doi/10.1177/1750635217730588',
                            journal: 'Media, War & Conflict',
                            issue: 'Vol. 12 (1), 88-101'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Promoting the Women, Peace and Security agenda',
                            url: 'https://www.iss.europa.eu/sites/default/files/EUISSFiles/EU%20and%20NATO.pdf',
                            journal: 'The EU and NATO: the essential partners',
                            issue: 'EUISS-NATO Defence College'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Making WPS a Reality in 2020: Transparency, Bold Leadership and Resources',
                            url: 'https://www.nato.int/nato_static_fl2014/assets/pdf/pdf_2019_03/20190307_190308-wps-essays-en.pdf',
                            journal: 'Resilience and Resolution A Compendium of Essays on Women, Peace and Security',
                            issue: 'NATO'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M. and Hurley, M.',
                            year: '2017',
                            title: 'Navigating Power and Perceptions when Researching NATO',
                            url: 'https://www.tandfonline.com/doi/abs/10.1080/14616742.2017.1324096',
                            journal: 'International Feminist Journal of Politics',
                            issue: 'Vol. 19 (3), 390-392'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M.',
                            year: '2016',
                            title: 'NATO’s Adoption of UNSCR 1325 on Women, Peace and Security: Making the Agenda a Reality',
                            url: 'https://journals.sagepub.com/doi/10.1177/0192512116638763',
                            journal: 'International Political Science Review',
                            issue: 'Vol. 37 (3), 350-361'
                        },
                        {
                            type: 'freeform',
                            text: 'This project is in its early stages and investigates how diverging actors engage with the Women, Peace and Security agenda and their perceptions of each other.',
                            url: '#'
                        }
                    ]
                },

                {
                    title: 'Gender and EU External Affairs',
                    img: 'genderandeu.jpg',
                    decription: 'gender gender gender gender gender gender',
                    publications: [
                        {
                            authors: 'Wright, K A M. and Guerrina, R., (in press)',
                            year: '2019',
                            title: 'Imagining the European Union: how EU actors (don’t) talk about gender in the digital sphere',
                            url: 'http://www.militarygender.com/',
                            publisher: 'London: Routledge',
                            description: 'The book was launched at NATO HQ in June 2019 with the NATO Secretary General presented with a copy, and was followed by a panel discussion at the Irish Embassy in Brussels co-hosted with WiiS.'
                        },
                        {
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Telling NATO’s Story of Afghanistan: gender and the alliance’s digital diplomacy',
                            url: 'https://eprint.ncl.ac.uk/239520',
                            journal: 'Media, War & Conflict',
                            issue: 'Vol. 12 (1), 88-101'
                        }
                    ]
                },
                 {
                    title: 'Brexit',
                    img: 'brexit.jpg',
                    decription: 'Stuff to do with nato and gender gender gender gender gender gender gender gender gender',
                    publications: [
                        {
                            authors: 'Wright, K A M. and Guerrina, R., (in press)',
                            year: '2019',
                            title: 'Imagining the European Union: how EU actors (don’t) talk about gender in the digital sphere',
                            url: 'http://www.militarygender.com/',
                            publisher: 'London: Routledge',
                            description: 'The book was launched at NATO HQ in June 2019 with the NATO Secretary General presented with a copy, and was followed by a panel discussion at the Irish Embassy in Brussels co-hosted with WiiS.'
                        },
                        {
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Telling NATO’s Story of Afghanistan: gender and the alliance’s digital diplomacy',
                            url: 'https://eprint.ncl.ac.uk/239520',
                            journal: 'Media, War & Conflict',
                            issue: 'Vol. 12 (1), 88-101'
                        }
                    ]
                }
            ]
        },

        teaching: {
            title: 'teaching',
            img: 'teaching.JPG',
            imgAlt: 'Katharine teaching',
            paragraphs: [
                'I am passionate about learning and teaching and have taught on a broad range of Politics and International Relations modules at both undergraduate and postgraduate level across three very different institutions. I currently lead a Security Studies module. ',

                'My approach to teaching is grounded in the belief that students should be actively involved in their own learning. I draw extensively on the problem based approach, for example simulations, to enable students to connect theoretical concepts with empirical reality. I have been involved with a number of student projects giving undergraduates an insight into the research process.',

                'I am a Fellow of the Higher Education Academy, and have a PgCert in Learning and Teaching in Higher Education (PGCAP) with distinction.'
            ]
        },

        media: {
            title: 'teaching',
            img: '',
            imgAlt: '',
            paragraphs: [

            ]
        }

    }
})
