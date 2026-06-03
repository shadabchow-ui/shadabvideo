import { RawVideo } from "lib/types";

export const rawVideos: RawVideo[] = [
  {
    slug: "downtown-fire-response",
    title: "Raw Footage: Multi-Alarm Fire Response, Downtown District",
    dek: "Bystander footage captures fire crews battling a structural fire in a mixed-use building before official press access was granted.",
    category: "Public Safety",
    date: "2025-11-14",
    location: "Downtown District",
    bunnyEmbedUrl:
      "https://iframe.mediadelivery.net/embed/LIBRARY_ID/VIDEO_ID_001",
    thumbnail: "/thumbnails/placeholder-fire.jpg",
    sensitivity: "standard",
    mainArticleUrl:
      "https://shadabchow.com/news/downtown-fire-response-verified-report",
    mainArticleTitle:
      "Downtown Fire: Timeline, Cause Investigation, and Displaced Residents",
    summary:
      "Raw clip shows early response before official information was released. The full report includes interviews with fire officials, building inspection history, and the status of displaced tenants.",
    whyReadArticle: [
      "What started the fire and whether the building passed recent inspections",
      "How many people were displaced and where they were relocated",
      "The official timeline from first alarm to containment",
      "Outstanding questions about the building's code compliance",
    ],
    keyFacts: [
      "Incident occurred at approximately 03:40 local time",
      "Fire crews from three stations responded",
      "No fatalities confirmed as of initial reporting",
      "Building had been subject to a prior complaints review",
    ],
    unresolvedQuestions: [
      "Origin point of the fire has not been officially confirmed",
      "Insurance and ownership structure of the building under review",
      "Long-term housing status of displaced residents unresolved",
    ],
  },
  {
    slug: "protest-dispersal-incident",
    title: "Raw Footage: Crowd Dispersal Outside City Hall",
    dek: "Unedited footage from multiple angles showing law enforcement dispersal of a permitted protest that escalated after nightfall.",
    category: "Civil Unrest",
    date: "2025-10-02",
    location: "City Hall Plaza",
    bunnyEmbedUrl:
      "https://iframe.mediadelivery.net/embed/LIBRARY_ID/VIDEO_ID_002",
    thumbnail: "/thumbnails/placeholder-protest.jpg",
    sensitivity: "disturbing",
    mainArticleUrl:
      "https://shadabchow.com/news/city-hall-protest-dispersal-report",
    mainArticleTitle:
      "City Hall Protest: What Led to the Dispersal and Who Was Detained",
    summary:
      "The clip circulated widely without context. The verified report documents the sequence of events from the permit filing through the dispersal order and subsequent detentions.",
    whyReadArticle: [
      "The legal basis cited for issuing the dispersal order",
      "Who authorized the use of crowd-control measures",
      "Names and charges filed against those detained",
      "Statements from organizers and the police department",
    ],
    keyFacts: [
      "Protest had a valid permit through 9:00 PM local time",
      "Dispersal order issued at approximately 9:47 PM",
      "Eleven individuals detained; charges varied",
      "City council requested a formal review the following day",
    ],
    unresolvedQuestions: [
      "Whether the dispersal was within the scope of the permit conditions",
      "Complaints filed against individual officers still under review",
      "Two detained individuals whose charges were not publicly confirmed",
    ],
  },
  {
    slug: "industrial-accident-footage",
    title: "Raw Footage: Industrial Facility Incident, East Side",
    dek: "Workers' cell phone footage from inside a facility moments after a reported equipment failure, before emergency services arrived.",
    category: "Workplace Safety",
    date: "2025-09-19",
    location: "East Side Industrial Zone",
    bunnyEmbedUrl:
      "https://iframe.mediadelivery.net/embed/LIBRARY_ID/VIDEO_ID_003",
    thumbnail: "/thumbnails/placeholder-industrial.jpg",
    sensitivity: "graphic",
    mainArticleUrl:
      "https://shadabchow.com/news/east-side-industrial-accident-investigation",
    mainArticleTitle:
      "Industrial Accident Investigation: Safety Violations, Injuries, and OSHA Response",
    summary:
      "Footage shows the immediate aftermath of equipment failure. The verified report documents the regulatory history of the facility, worker injury status, and the OSHA investigation findings.",
    whyReadArticle: [
      "OSHA violation history at this facility over the past three years",
      "Status and condition of the injured workers",
      "Whether safety protocols were followed before the incident",
      "Company response and any regulatory actions taken",
    ],
    keyFacts: [
      "Three workers injured; two transported to regional medical center",
      "Facility had received two prior OSHA citations in 36 months",
      "Production was halted pending inspection",
      "State workplace safety board opened a formal inquiry",
    ],
    unresolvedQuestions: [
      "Root cause determination pending engineering review",
      "Criminal liability investigation ongoing",
      "Long-term injury prognosis for two workers not publicly disclosed",
    ],
  },
];

export function getVideoBySlug(slug: string): RawVideo | undefined {
  return rawVideos.find((v) => v.slug === slug);
}
