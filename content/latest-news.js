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
        "message": `The new server features an ETL system that enables automated file processing and testing for the 2027 Swiss Federal Election.
        <br>
        This setup implements also an automatic feedback report transferred by email that will help detecting strucural errors in the XML file for both Information and Results deliveries.
        <br><br>
        Moreover, we provide a <a href=guide.html>eCH-0252 implementation guide</a> dedicated to Federal Election, <a href=yaml_file.html>YAML files</a> containing mandatory XML structures and <a href=xml_file.html>XML examples</a> for both information and results deliveries. 
        `
    }
]