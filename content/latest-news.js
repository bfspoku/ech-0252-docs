/*

We can add new events in the timeline by adding the following object in the array eventsData.

{ 
    "date": "...", 
    "title": "...", 
    "message": "..." 
}

Note: 
    In "message" one can use html syntax as the text will be insert into a <p> element
    Give the date in the format DD.MM.YYYY.
    A javascript will sort automatically the news by date so that they appears in chronological order (the newest at the top) and will show only the last two news on the Home Page.

*/

var newsData = [
    { 
        "date": "20.01.2026", 
        "title": "The Swiss Election ETL System is up and running", 
        "message": `The Swiss Elections ETL system is now operational. It enables automated processing and validation of eCH-0252 XML files in preparation for the 2027 Swiss Federal Elections.
                    <br><br>
                    The system includes automated structural and schema-based checks for both information and result deliveries. Validation outcomes are compiled into a feedback report and sent by email to support early detection of format-related issues in the submitted deliveries.
                    <br>
                    In addition, the following supporting materials are available:
                    <ul class="unstyled">
                    <li> An eCH-0252 Implementation Guide specifically dedicated to Swiss Federal Elections </li>
                    <li> YAML files defining mandatory XML structures as a baseline for implementation </li>
                    <li> XML example files illustrating compliant information and results deliveries </li>
                    </ul>`
}
]