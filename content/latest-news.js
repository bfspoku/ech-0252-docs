/*

We can add new events in the timeline by adding the following object in the array eventsData.

{ 
    "month": "...", 
    "title": "...", 
    "message": "..." 
}

Note: 
    Give the date in the format DD.MM.YYYY.
    A javascript will sort automatically the news by date so that they appears in chronological order (the newest at the top) and will show only the last two news on the Home Page.

*/

var newsData = [
    { 
        "date": "26.11.2026", 
        "title": "This is a title", 
        "message": "This is a news" 
    },
    { 
        "date": "05.05.2026", 
        "title": "This is a title", 
        "message": "This is a news" 
    },
    { 
        "date": "08.07.2026", 
        "title": "This is a title", 
        "message": "This is a news" 
    },
    { 
        "date": "13.02.2026", 
        "title": "This is a title", 
        "message": "This is a news" 
    },
    { 
        "date": "20.01.2026", 
        "title": "This is a title", 
        "message": "This is a news" 
    },
]