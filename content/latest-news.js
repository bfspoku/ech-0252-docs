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
        "date": "04.02.2026",
        "title": "Corrected Implementation Guide and improved XML sample files",
        "message": `
                    Following coordination with eCH, the position of the key element otherIdentification / idBund for federal elections has been corrected in the Implementation Guide and in the accompanying XML sample files.
                    <br>
                    All corresponding changes in the guide are marked in green.
                    <br><br>
                    In addition, several XML sample files have been corrected to ensure schema compliance.
                    The sample package has been extended to include:
                    <ul class="unstyled">
                    <li> examples for National Council elections under the majoritarian system, and </li>
                    <li> examples illustrating the handling of write-in candidates. </li>
                    </ul>
                   `
    },
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