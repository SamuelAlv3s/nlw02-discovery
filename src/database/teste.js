const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) =>{

    proffyValue = {
        name: "Samuel Alves",
        avatar: "https://avatars1.githubusercontent.com/u/49680351?s=460&v=4",
        whatsapp: "779977997799",
        bio: "Entusiasta das melhores tecnologias de detecção de estrelas de todo o universo. Apaixnado pelo universo",
        
    }

    classValue = {
        subject: "2",
        cost: "50",
    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 2,
            time_from: 750,
            time_to: 1100
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues});

    const selectedProffys = await db.all("SELECT * FROM proffys");

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "520"
    `);
})