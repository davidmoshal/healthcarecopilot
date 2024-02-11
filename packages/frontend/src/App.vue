<script setup lang="ts">
import { ref } from 'vue'
import { query } from './api/api'

const state = ref("")
const symptoms = ref("")

const output = ref("")

async function handleSubmit(e: any) {
  e.preventDefault()
  const res = await query(`I have long COVID. My symptoms are ${symptoms.value}. I live in ${state.value}. Who are some doctors I should look at to get treated? Be very empathetic. Return a name from this json object. Do not format the output text with the json keys. [
  [
  {
    "Business Name": "Axcella Therapeutics",
    "Doctor Name": "Margaret Koziel, MD",
    "City": "Cambridge",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Tonix Pharmaceuticals",
    "Doctor Name": "Seth Lederman, MD",
    "City": "NY",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "The institute functional medicine",
    "Doctor Name": "Serena M. Satcher, MD",
    "City": "Roswell",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Dysautonomia Clinic",
    "Doctor Name": "Svetlana Blitshteyn, MD",
    "City": "Bufallo",
    "State": "NY",
    "Specialties": "gut health, dysautonomia"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Jacob Teitelbaum MD",
    "City": "",
    "State": "HI",
    "Specialties": ""
  },
  {
    "Business Name": "MyGoToDoc",
    "Doctor Name": "Dr. Syed Haider, MD",
    "City": "",
    "State": "remote",
    "Specialties": "retired internist"
  },
  {
    "Business Name": "RHTM",
    "Doctor Name": "Dr. Jennifer Curtin, MD",
    "City": "",
    "State": "remote",
    "Specialties": "Internist/ Chinese"
  },
  {
    "Business Name": "incelldx, physician consulting service \"Chronic COVID Treatment Center",
    "Doctor Name": "Dr. Bruce Patterson",
    "City": "",
    "State": "remote",
    "Specialties": ""
  },
  {
    "Business Name": "NHS, community clinic",
    "Doctor Name": "Dr. Tim Robinson",
    "City": "",
    "State": "NY",
    "Specialties": "Pathologist"
  },
  {
    "Business Name": "Mount Sianai",
    "Doctor Name": "David Putrino PT PhD",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Brown University",
    "Doctor Name": "Dr. Francesca Beaudoin MD, MS, PhD",
    "City": "Worchester",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Long Covid NP",
    "Doctor Name": "Marian Allen, RN, MSN, FNP-C",
    "City": "",
    "State": "FL, CO, AZ, WA",
    "Specialties": "emergency physician and clinical epidemiologist"
  },
  {
    "Business Name": "NHS, British Medical Association",
    "Doctor Name": "Dr. David Strain MD",
    "City": "",
    "State": "",
    "Specialties": "Integrative medicine"
  },
  {
    "Business Name": "Neuro COVID-19 Clinic",
    "Doctor Name": "Dr. Igor Koralnik MD",
    "City": "Chicago",
    "State": "IL",
    "Specialties": "genetic study of Long Covid for prevention, Neuroinfectious Disease"
  },
  {
    "Business Name": "University of California, San Francisco",
    "Doctor Name": "Dr. Lekshmi Santhosh",
    "City": "San Francisco",
    "State": "CA",
    "Specialties": "Neuroinfectious Disease"
  },
  {
    "Business Name": "*closed - George Washington Medical Faculty Associates COVID-19 Recovery Clinic",
    "Doctor Name": "Dr. Aileen Chang MD",
    "City": "Washington",
    "State": "DC",
    "Specialties": "Internal Medicine"
  },
  {
    "Business Name": "Amen Clinics",
    "Doctor Name": "",
    "City": "Walnet Creek",
    "State": "CA",
    "Specialties": "internist"
  },
  {
    "Business Name": "Parsely Health",
    "Doctor Name": "",
    "City": "remote",
    "State": "",
    "Specialties": "root-cause resolution medicine"
  },
  {
    "Business Name": "NYU Langone",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "UCM Telehealth program",
    "Doctor Name": "",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Cleveland Clinic",
    "Doctor Name": "Dr. Christina Shin",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Dr. Daniel Pomona",
    "Doctor Name": "",
    "City": "",
    "State": "",
    "Specialties": "anesthesiologist and pain management"
  },
  {
    "Business Name": "Circle Health",
    "Doctor Name": "Dr. Greg Vanichkachorn",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Circle Medical",
    "Doctor Name": "",
    "City": "",
    "State": "28 states",
    "Specialties": ""
  },
  {
    "Business Name": "Ravel Health",
    "Doctor Name": "",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Cognitive fx",
    "Doctor Name": "Alina Fong, PhD, Jaycie Loewen. Kaydee Severs",
    "City": "",
    "State": "UT",
    "Specialties": ""
  },
  {
    "Business Name": "Kavli Institute of Neuroscience at Yale University",
    "Doctor Name": "Arman Fesharaki-Zadeh, MD, PhD",
    "City": "",
    "State": "CT",
    "Specialties": "Post Concussion"
  },
  {
    "Business Name": "Integrative Health Institute",
    "Doctor Name": "Bryan Glick DO",
    "City": "",
    "State": "AZ",
    "Specialties": "Psychiatry, Neurology"
  },
  {
    "Business Name": "LifeScapePremier",
    "Doctor Name": "Susan S. Wilder, MD",
    "City": "",
    "State": "AZ",
    "Specialties": "alternative"
  },
  {
    "Business Name": "Optimal Circadian Health",
    "Doctor Name": "",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "ModernHealthClinic",
    "Doctor Name": "Anna Wolyn, MD",
    "City": "",
    "State": "",
    "Specialties": "transformation coach and Family Medicine physician"
  },
  {
    "Business Name": "Post Covid by rtMed",
    "Doctor Name": "Ash Dobbin-Mohammed, NP",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Arizona Wellness Medicine",
    "Doctor Name": "Emily Parke, MD",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Roots Deep Functional Pharm",
    "Doctor Name": "Christine Lewis",
    "City": "",
    "State": "AZ, KA, MT",
    "Specialties": ""
  },
  {
    "Business Name": "AZ Integrative Medicine/Spa",
    "Doctor Name": "Jyoti Patel, MD",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Powell Clinic",
    "Doctor Name": "Margaret Powell, DC",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Intergrative Medicine of AZ",
    "Doctor Name": "Cheri Diane Dersam, MD",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Benehealth",
    "Doctor Name": "Lauren Bachman, DNP",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "",
    "Doctor Name": "Lisa O. Ballehr, DO",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Sprouts Health",
    "Doctor Name": "Zhanna Tarjeft, NP",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Individualized/Personal Team",
    "Doctor Name": "Chad Campbell, PA-C",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Your Wellness MD",
    "Doctor Name": "Karla Birkholz, MD",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "POTS Care",
    "Doctor Name": "Diana Driscoll, OD",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Scottsdale Private Physicians",
    "Doctor Name": "Helene Wechsler, MD",
    "City": "",
    "State": "",
    "Specialties": "Doctor of Optometry"
  },
  {
    "Business Name": "End Fatigue",
    "Doctor Name": "Dr. Jacob Teitelbaum MD",
    "City": "",
    "State": "HI",
    "Specialties": ""
  },
  {
    "Business Name": "Mount Sianai",
    "Doctor Name": "David F Putrino, PhD (Australian)",
    "City": "",
    "State": "NY",
    "Specialties": "Internist"
  },
  {
    "Business Name": "Mater Misericordiae University Hospital, and Associate Professor at UCD School of Medicine",
    "Doctor Name": "Prof Jack Lambert",
    "City": "",
    "State": "Dublin, Ireland",
    "Specialties": "Physical Therapy, PhD Neuroscience"
  },
  {
    "Business Name": "Mount Sinai-Union Square",
    "Doctor Name": "Center for Post-COVID Care",
    "City": "",
    "State": "",
    "Specialties": "Infectious Diseases and Genitourinary Medicine"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Clare Rayner",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Daniel Pompa",
    "City": "",
    "State": "",
    "Specialties": "Occupational Therapist"
  },
  {
    "Business Name": "Johns Hopkins Children's Center Chronic Fatigue Clinic (Visser-Van-Campen-Rowe Team)",
    "Doctor Name": "Dr. Peter Rowe",
    "City": "",
    "State": "MD",
    "Specialties": "Chiropractor"
  },
  {
    "Business Name": "Center for Complex Diseases, Center for Healing Neurology",
    "Doctor Name": "Dr. David Lyons Kaufman, MD",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Emeritus at Hunter-Hopkins Center",
    "Doctor Name": "Charles W. Lapp, MD",
    "City": "",
    "State": "",
    "Specialties": "Internal Medicine"
  },
  {
    "Business Name": "Sierra Internal Medicine",
    "Doctor Name": "",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Mobeen Syed",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Aileen Chang MD",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Evan Hirsch MD",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Dysautonomia Clinic",
    "Doctor Name": "Svetlana Blitshteyn",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "RTHM",
    "Doctor Name": "Jennifer Curtin, MD",
    "City": "",
    "State": "AZ, CA, FL, NY, Oregon, Virginia, Washington",
    "Specialties": ""
  },
  {
    "Business Name": "",
    "Doctor Name": "Jeffrey Bland, MD",
    "City": "",
    "State": "",
    "Specialties": "post-viral"
  },
  {
    "Business Name": "Long Haulers Telemedical",
    "Doctor Name": "",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Parsely Health",
    "Doctor Name": "Robin Berzin, MD",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Hoffman Centre",
    "Doctor Name": "",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "MedHelp",
    "Doctor Name": "Dr. Jordan Vaughn",
    "City": "Birmingham",
    "State": "AL",
    "Specialties": "Micro Clotting Testing, Triple Coagulation Therapy"
  },
  {
    "Business Name": "Aila Health",
    "Doctor Name": "",
    "City": "",
    "State": "",
    "Specialties": ""
  },
  {
    "Business Name": "Detox For Life",
    "Doctor Name": "",
    "City": "Scottsdale",
    "State": "AZ",
    "Specialties": "EBOO, Colon Hydro., IVs, Ozone Sauna, Sauna, etc."
  },
  {
    "Business Name": "Envita Medical Center",
    "Doctor Name": "",
    "City": "Scottsdale",
    "State": "AZ",
    "Specialties": "IVs, Cancer, Chronic Illness, Lyme, Integrative, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Mia Darling, ND",
    "City": "Scottsdale",
    "State": "AZ",
    "Specialties": "Lyme Disease, Holistic/Integrative"
  },
  {
    "Business Name": "Prana IV Therapy",
    "Doctor Name": "",
    "City": "Scottsdale",
    "State": "AZ",
    "Specialties": "IVs (Ozone)"
  },
  {
    "Business Name": "The Hormone Zone",
    "Doctor Name": "",
    "City": "Scottsdale",
    "State": "AZ",
    "Specialties": "EBOO, Hormone Replacement Therapy, IVs (Ozone), etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Bart Sills",
    "City": "Fort Smith",
    "State": "AR",
    "Specialties": "MDVIP (24/7), Primary"
  },
  {
    "Business Name": "Total Rehab",
    "Doctor Name": "",
    "City": "Fort Smith",
    "State": "AR",
    "Specialties": "Rehabilitation"
  },
  {
    "Business Name": "AMA Regenerative Med. & S.",
    "Doctor Name": "",
    "City": "Santa Ana +",
    "State": "CA",
    "Specialties": "EBOO, Hyperbaric, IVs (Ozone), Skincare, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Yo",
    "City": "San Carlos ?",
    "State": "CA",
    "Specialties": "Long Haulers, Cytokine & Chemokine Testing"
  },
  {
    "Business Name": "Synergy O3",
    "Doctor Name": "",
    "City": "Encinitas",
    "State": "CA",
    "Specialties": "EBOO or EBO2, Integrative"
  },
  {
    "Business Name": "Affordable Hyperbaric Solut.",
    "Doctor Name": "",
    "City": "Denver",
    "State": "CO",
    "Specialties": "Hyperbaric Rentals"
  },
  {
    "Business Name": "Boulder Biologics",
    "Doctor Name": "",
    "City": "Boulder",
    "State": "CO",
    "Specialties": "Bone Marrow Stem Cells"
  },
  {
    "Business Name": "",
    "Doctor Name": "Adam Breiner, ND",
    "City": "Fairfield",
    "State": "CT",
    "Specialties": "IVs, Biomag, Hyperbaric, Neurofeedback, PEMF, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Steven Phillips",
    "City": "Wilton",
    "State": "CT",
    "Specialties": "Lyme Disease, Chronic Illness"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Norman Gaylis",
    "City": "Aventura",
    "State": "FL",
    "Specialties": "Long Haul Covid, Arthritis, Rheumatologist"
  },
  {
    "Business Name": "Hyperbaric Medical Solutions",
    "Doctor Name": "",
    "City": "Fort Lauderdale",
    "State": "FL",
    "Specialties": "Medical Grade Hyperbaric, IVs"
  },
  {
    "Business Name": "Institute of Regenerative Med.",
    "Doctor Name": "",
    "City": "Boca Raton",
    "State": "FL",
    "Specialties": "EBO2, IVs, Cellular Repair, Degenerative, Stem Cells"
  },
  {
    "Business Name": "LifeWorks Wellness Center",
    "Doctor Name": "",
    "City": "Clearwater",
    "State": "FL",
    "Specialties": "EBOO, Hyperbaric, IVs, Ozone Sauna, PEMF, Testing, etc."
  },
  {
    "Business Name": "Lymph Linda",
    "Doctor Name": "",
    "City": "West Palm Beach",
    "State": "FL",
    "Specialties": "Lympahtic Massage"
  },
  {
    "Business Name": "",
    "Doctor Name": "Michele Millen, ND",
    "City": "Stuart",
    "State": "FL",
    "Specialties": "Alternative Analysis, Homepathy, PEMF, etc."
  },
  {
    "Business Name": "Radiance Age Management",
    "Doctor Name": "",
    "City": "Palm Beach Gardens",
    "State": "FL",
    "Specialties": "EBO2, Anti-Aging, etc."
  },
  {
    "Business Name": "Tringali Vibrant Health",
    "Doctor Name": "",
    "City": "West Palm Beach (+1?)",
    "State": "FL",
    "Specialties": "EBO2, IVs, Ozone Sauna, PEMF, Peptides, etc."
  },
  {
    "Business Name": "Atlanta Ozone Clinic",
    "Doctor Name": "",
    "City": "Chicago",
    "State": "IL",
    "Specialties": "Long Haul Covid"
  },
  {
    "Business Name": "",
    "Doctor Name": "Oscar Sierra, LAc",
    "City": "Chicago",
    "State": "IL",
    "Specialties": "Neurologist"
  },
  {
    "Business Name": "Pulse Centers",
    "Doctor Name": "",
    "City": "Northbrook",
    "State": "IL",
    "Specialties": "Hyperbaric Oxygen"
  },
  {
    "Business Name": "Pulsed Ozone",
    "Doctor Name": "",
    "City": "Chicago",
    "State": "IL",
    "Specialties": "Long Haul Covid/Post Covid Clinic"
  },
  {
    "Business Name": "",
    "Doctor Name": "Karyn Shanks, MD",
    "City": "Decatur",
    "State": "IL",
    "Specialties": "IVs (10 Pass Ozone), HOCATT, Peptides, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Eric P Ecklund-Johnson PhD",
    "City": "Kansas City",
    "State": "KS",
    "Specialties": "Neuropsychologist"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Micholee Polsak",
    "City": "Kansas City",
    "State": "KS",
    "Specialties": "Primary Care, Osteopathy"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Rigoberto Ramirez",
    "City": "Overland Park",
    "State": "KS",
    "Specialties": "Cardiology"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Swathy Chandrashekhar",
    "City": "Kansas City",
    "State": "KS",
    "Specialties": "Neurology"
  },
  {
    "Business Name": "Hyperbaric Medical Solutions",
    "Doctor Name": "",
    "City": "Randolph",
    "State": "MA",
    "Specialties": "Medical Grade Hyperbaric, IVs"
  },
  {
    "Business Name": "Mass Gen Covid-19 Survivors",
    "Doctor Name": "",
    "City": "Boston",
    "State": "MA",
    "Specialties": "Long Haul Covid/Post Covid Clinic"
  },
  {
    "Business Name": "American Regenerative Clinic",
    "Doctor Name": "",
    "City": "Bingham Farms",
    "State": "MI",
    "Specialties": "EBOO, Ozone, PRP, etc."
  },
  {
    "Business Name": "One Agora Health",
    "Doctor Name": "",
    "City": "Bloomington",
    "State": "MN",
    "Specialties": "IV Ozone, Acu., Lyme, Neurobiofeedback, Peptides, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Christine White, ND",
    "City": "Missoula",
    "State": "MT",
    "Specialties": "IVs, Pain, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Margaret Coffey, ND",
    "City": "Missoula",
    "State": "MT",
    "Specialties": "IVs, Pain, etc."
  },
  {
    "Business Name": "Aim Clinic",
    "Doctor Name": "",
    "City": "Exeter",
    "State": "NH",
    "Specialties": "IVs (Ozone), Autoimmunity, EBO2, Lyme, PEMF, etc."
  },
  {
    "Business Name": "New Jersey Regenerative Ins.",
    "Doctor Name": "",
    "City": "Cedar Knolls",
    "State": "NJ",
    "Specialties": "IVs (Ozone/UBI), Regenerative, Stem Cells, etc."
  },
  {
    "Business Name": "Micronutrient Infusion Serv,",
    "Doctor Name": "",
    "City": "Alburquerque",
    "State": "NM",
    "Specialties": "IVs (Ozone), Ozone Sauna, Allergy Testing, etc."
  },
  {
    "Business Name": "AAA & Wellness",
    "Doctor Name": "",
    "City": "Patchogue (Su)",
    "State": "NY",
    "Specialties": "NAET, etc."
  },
  {
    "Business Name": "Covid Castaways",
    "Doctor Name": "",
    "City": "Long Island (Su)",
    "State": "NY",
    "Specialties": "Long Haul Covid & Vaccine Injury Support"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Brianne Navetta-Modrov",
    "City": "Commack (Su)",
    "State": "NY",
    "Specialties": "Allergies, Immunology, Blood Tests"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Eric Seigel",
    "City": "Commack (Su)",
    "State": "NY",
    "Specialties": "Trigger Point, Pain Manage., Men's Health, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Faiz Khan",
    "City": "Syosset (Su)",
    "State": "NY",
    "Specialties": "IV (Ozone), Integrative Medicine"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Lilly Steel",
    "City": "Riverhead (Su)",
    "State": "NY",
    "Specialties": "MDVIP (24/7), Primary, Prescribing"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Susan Levine",
    "City": "Manhattan",
    "State": "NY",
    "Specialties": "Infectious Disease, Chronic Fatigue, Post Viral"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Thuy T. Nguyen",
    "City": "Stony Brook (Su)",
    "State": "NY",
    "Specialties": "Alternative (LED, etc.), Eastern Meidicine, tDCS, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Trang Nguyen",
    "City": "Southampton (Su)",
    "State": "NY",
    "Specialties": "Osteopathy"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Wayne Bellucci",
    "City": "Riverhead (Su)",
    "State": "NY",
    "Specialties": "Pulmonology"
  },
  {
    "Business Name": "Hamptons Float",
    "Doctor Name": "",
    "City": "Water Mill (Su)",
    "State": "NY",
    "Specialties": "Calming, Float Tank, Sauna, Sensory Deprivation, Relax."
  },
  {
    "Business Name": "Hyperbaric Medical Solutions",
    "Doctor Name": "",
    "City": "Medford, NY, Woodbury",
    "State": "NY",
    "Specialties": "Medical Grade Hyperbaric, etc."
  },
  {
    "Business Name": "Integrative Family Ac. & MT",
    "Doctor Name": "",
    "City": "Smithtown (Su)",
    "State": "NY",
    "Specialties": "Blood/Wet Cupping, Acupuncture, Cupping, Massage, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Jennifer Baer, NP",
    "City": "Hudson & Latham",
    "State": "NY",
    "Specialties": "IVs (Ozone), Chronic Illness, PEMF, Testing, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "John Carroll",
    "City": "Manhattan",
    "State": "NY",
    "Specialties": "Healer"
  },
  {
    "Business Name": "",
    "Doctor Name": "Judy Demitrack, RN",
    "City": "East Hampton (Su)",
    "State": "NY",
    "Specialties": "Ondamed"
  },
  {
    "Business Name": "",
    "Doctor Name": "Karin Auwaerter",
    "City": "Sag Harbor (Su)",
    "State": "NY",
    "Specialties": "Craniosacral"
  },
  {
    "Business Name": "Leda Medical",
    "Doctor Name": "",
    "City": "Manhattan",
    "State": "NY",
    "Specialties": "EBO2, Chronic Illness, Exosomes, IVIG, Lyme, SOT, etc."
  },
  {
    "Business Name": "Liondale Medical",
    "Doctor Name": "",
    "City": "Manhattan",
    "State": "NY",
    "Specialties": "IVs (10 Pass Ozone), Integrative, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Mary Beth Armstrong, LAc",
    "City": "Sag Harbor (Su)",
    "State": "NY",
    "Specialties": "Acupuncture, Cupping, Massage, Body Movements, etc."
  },
  {
    "Business Name": "Metro Physcial Therapy",
    "Doctor Name": "",
    "City": "Ridge (Su)",
    "State": "NY",
    "Specialties": "Laser Therapy"
  },
  {
    "Business Name": "",
    "Doctor Name": "Michael J. DiMaio, DC",
    "City": "Manorville (Su)",
    "State": "NY",
    "Specialties": "Atlas Orthogonal Chiropractor, Activator"
  },
  {
    "Business Name": "Monunt Sinai Post Covid",
    "Doctor Name": "",
    "City": "Manhattan",
    "State": "NY",
    "Specialties": "Post Covid (Must have + on test)"
  },
  {
    "Business Name": "Peconic Family Medicine",
    "Doctor Name": "",
    "City": "Quogue (Su)",
    "State": "NY",
    "Specialties": "Primary Care"
  },
  {
    "Business Name": "Pulmonary Wellness Found.",
    "Doctor Name": "",
    "City": "Manhattan",
    "State": "NY",
    "Specialties": "Pulmonary Rehab"
  },
  {
    "Business Name": "Rohde Wellness",
    "Doctor Name": "",
    "City": "'-",
    "State": "NY",
    "Specialties": "Alternative Analysis (EAV)"
  },
  {
    "Business Name": "Scott Rosa, DC",
    "Doctor Name": "",
    "City": "Rock Hill, NY (Sul)",
    "State": "NY",
    "Specialties": "Atlas Orthogonal Chiropractor"
  },
  {
    "Business Name": "STANDwellness",
    "Doctor Name": "",
    "City": "Water Mill (Su)",
    "State": "NY",
    "Specialties": "DNA, Biogmag, PEMF, Sauna, Nutrition, etc."
  },
  {
    "Business Name": "Stony Brook Post Covid",
    "Doctor Name": "",
    "City": "Commack (Su)",
    "State": "NY",
    "Specialties": "Long Haul Covid/Post Covid Clinic, Testing"
  },
  {
    "Business Name": "Stram Center",
    "Doctor Name": "",
    "City": "Delmar (Alb)",
    "State": "NY",
    "Specialties": "IVs, Pain, Chronic Illness, Acupuncture, etc."
  },
  {
    "Business Name": "The Morrison Center",
    "Doctor Name": "",
    "City": "Manhattan & Water Mill",
    "State": "NY",
    "Specialties": "IVs, PEMF, Biomag, Prescribing, Peptides, etc."
  },
  {
    "Business Name": "Vibeke Seelye",
    "Doctor Name": "",
    "City": "Bridgehampton",
    "State": "NY",
    "Specialties": "Colonics (Colon Hydrotherapy)"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Rashid Buttar (DO)",
    "City": "Mooresville",
    "State": "NC",
    "Specialties": "IVs (Ozone), Chronic Illness, Hyperbaric, Stroke, etc."
  },
  {
    "Business Name": "Healing w/Hyperbarics of N.D.",
    "Doctor Name": "",
    "City": "Fargo",
    "State": "ND",
    "Specialties": "Hyperbaric Oxygen"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Elliot Michel",
    "City": "Tarentum & New Castle",
    "State": "PA",
    "Specialties": "Neurology"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Mikhail J. Artamonov",
    "City": "Sciota",
    "State": "PA",
    "Specialties": "Extracorporeal Blood Purification (Ozone), IV (Ozone), etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "John Barnes",
    "City": "Malvern",
    "State": "PA",
    "Specialties": "Myofascial Release"
  },
  {
    "Business Name": "Meeting Point Health",
    "Doctor Name": "",
    "City": "Philadelphia",
    "State": "PA",
    "Specialties": "IVs (Ozone), Integrative, Regenerative, etc."
  },
  {
    "Business Name": "Stem Cells Philadelphia",
    "Doctor Name": "",
    "City": "Philadelphia",
    "State": "PA",
    "Specialties": "IVs (Ozone), Acupuncture, Regenerative, Stem Cells, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Wendell Hoffman",
    "City": "Sioux Falls",
    "State": "SD",
    "Specialties": "Infectious Diseases"
  },
  {
    "Business Name": "Midwest Mild Hyperbarics",
    "Doctor Name": "",
    "City": "Black Hawk",
    "State": "SD",
    "Specialties": "Hyperbaric Oxygen"
  },
  {
    "Business Name": "",
    "Doctor Name": "Meg Richichi",
    "City": "Charleston",
    "State": "SC",
    "Specialties": "Autoimmunity, GI Issues, Hormones, Infertility, Pain, etc."
  },
  {
    "Business Name": "Upstate Med Spa LLC",
    "Doctor Name": "",
    "City": "Greer",
    "State": "SC",
    "Specialties": "EBOO, IVs, etc."
  },
  {
    "Business Name": "Compass Cellular Healing",
    "Doctor Name": "",
    "City": "Nashville",
    "State": "TN",
    "Specialties": "EBO2, 10 Pass Ozone, Auto Immune, Lyme, Peptides, etc."
  },
  {
    "Business Name": "Blissful Waters Float Center",
    "Doctor Name": "",
    "City": "The Woodlands",
    "State": "TX",
    "Specialties": "Calming, Float Tank, Sensory Deprivation, Relaxation"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Ankur Khosla",
    "City": "The Woodlands",
    "State": "TX",
    "Specialties": "Chronic Pain, Spinal Cord Stimulation"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Felicity Mack",
    "City": "Houston",
    "State": "TX",
    "Specialties": "Primary"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Kia Eldred",
    "City": "Houston",
    "State": "TX",
    "Specialties": "Neuro Optometrist"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Lewis Clarke",
    "City": "Webster",
    "State": "TX",
    "Specialties": "Neupanex, Neuro Diseases, Spine, Stokes, TBI, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Monica Gutierrez",
    "City": "San Antonio",
    "State": "TX",
    "Specialties": "Post Covid, Brain Injury, Stroke"
  },
  {
    "Business Name": "Root Causes Medicine",
    "Doctor Name": "",
    "City": "San Antonio",
    "State": "TX",
    "Specialties": "EBOO, Cryotherpay, IVs, Stem Cells, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Tiffany Kristensen, LAc",
    "City": "Spring",
    "State": "TX",
    "Specialties": "Acupuncture, Cupping, Electric Stim, Herbs"
  },
  {
    "Business Name": "Docere Clinics",
    "Doctor Name": "",
    "City": "Park City",
    "State": "UT",
    "Specialties": "EBO2, Stem Cells, etc."
  },
  {
    "Business Name": "South Jordan Chiro. & Well.",
    "Doctor Name": "",
    "City": "South Jordan",
    "State": "UT",
    "Specialties": "Hyperbaric Oxygen"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. David Kaufman",
    "City": "Seattle",
    "State": "WA",
    "Specialties": "Complex Diseases, Internal, Chronic Ill., MCAS, CFS, etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Erik R. Armitano",
    "City": "Kirkland",
    "State": "WA",
    "Specialties": "Complex Regional Pain Syndrome, Autonomic Disorders"
  },
  {
    "Business Name": "Vigor Natural Health Clinic",
    "Doctor Name": "",
    "City": "Vancouver",
    "State": "WA",
    "Specialties": "IVs (Ozone), etc."
  },
  {
    "Business Name": "",
    "Doctor Name": "Angela Howard",
    "City": "Oak Creek",
    "State": "WI",
    "Specialties": "Detox, Gut, Nutrtion"
  },
  {
    "Business Name": "",
    "Doctor Name": "Dr. Steven Meress",
    "City": "Fond du Lac",
    "State": "WI",
    "Specialties": "IVs, Acupuncture, Alternative Analysis, Hyperbaric, etc."
  },
  {
    "Business Name": "University of Alabama at Birmingham COVID Respiratory Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "AL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning Program",
    "Doctor Name": "",
    "City": "",
    "State": "AL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning Program",
    "Doctor Name": "",
    "City": "",
    "State": "AL",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "AL",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "AL",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "AL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "AK",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "AK",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "AK",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "AK",
    "Specialties": ""
  },
  {
    "Business Name": "Post Covid Rehabilitation Bartlett Hospital- Juneau",
    "Doctor Name": "",
    "City": "",
    "State": "AK",
    "Specialties": ""
  },
  {
    "Business Name": "",
    "Doctor Name": "",
    "City": "",
    "State": "AS",
    "Specialties": ""
  },
  {
    "Business Name": "Rehabilitation Hospital of Northern Arizona",
    "Doctor Name": "",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "RX-O2 Hyperbaric Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Mountain Valley Regional Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "Banner Health Long COVID Treatment Program",
    "Doctor Name": "",
    "City": "",
    "State": "AZ",
    "Specialties": ""
  },
  {
    "Business Name": "MANA Medical Associates of Northwest Arkansas Post COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "AR",
    "Specialties": ""
  },
  {
    "Business Name": "Stanford Post-Acute COVID-19 Syndrome (PACS) Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "St. Jude Medical Center Post-COVID Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Mission Heritage Medical Group Post Covid Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Mission Heritage Medical Group Post Covid Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Loma Linda University Health COVID-19 Heart Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Cedars-Sinai COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Cedars-Sinai COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Cedars-Sinai Post-COVID-19 Cardiology Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Children’s Hospital Los Angeles Long COVID Recovery Care",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Keck Medicine of USC COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "UCLA Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Stanford Health Care CROWN Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Pomona Valley Hospital Medical Center (PVHMC) Post-COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "UC Davis Health Post-COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "PRN Physical Therapy / PACER Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "PRN Physical Therapy / PACER Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "PRN Physical Therapy / PACER Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "PRN Physical Therapy / PACER Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "PRN Physical Therapy / PACER Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "PRN Physical Therapy / PACER Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Sharp Allison deRose Rehabilitation Center COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "UC San Diego Health Post-COVID Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Scripps Health COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Scripps Health COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "UCSF OPTIMAL Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Atlantis Physical Therapy COVID-19 Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Valley Comprehensive Outpatient Rehabilitation Facility (CORF)",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "UCI Health COVID Recovery Service",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "UCI Health COVID Recovery Service",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "Aila Health Post Covid Virtual Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CA",
    "Specialties": ""
  },
  {
    "Business Name": "UC Health - University of Colorado Hospital Post-Intensive Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CO",
    "Specialties": ""
  },
  {
    "Business Name": "Colorado COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "CO",
    "Specialties": ""
  },
  {
    "Business Name": "National Jewish Health Center for Post-COVID-19 Care and Recovery",
    "Doctor Name": "",
    "City": "",
    "State": "CO",
    "Specialties": ""
  },
  {
    "Business Name": "National Jewish Health for Kids",
    "Doctor Name": "",
    "City": "",
    "State": "CO",
    "Specialties": ""
  },
  {
    "Business Name": "Family Health West Post-COVID Recovery Team",
    "Doctor Name": "",
    "City": "",
    "State": "CO",
    "Specialties": ""
  },
  {
    "Business Name": "Northern Colorado Rehabilitation Hospital (NCRH)Northern Colorado Long Term Acute Hospital (NCLTAH)",
    "Doctor Name": "",
    "City": "",
    "State": "CO",
    "Specialties": ""
  },
  {
    "Business Name": "Rehab Without Walls NeuroSolutions Post COVID / PICS Program",
    "Doctor Name": "",
    "City": "",
    "State": "CO",
    "Specialties": ""
  },
  {
    "Business Name": "Aila Health Post Covid Virtual Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CO",
    "Specialties": ""
  },
  {
    "Business Name": "UConn Health Long-COVID Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "Hartford Healthcare COVID Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "Middlesex Health Post-COVID Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "Post COVID-19 Recovery Program at Yale Winchester Chest Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "Yale New Haven Children’s Post-COVID Comprehensive Care Program",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "UC Davis Health Post-COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "WMCHealth Post-COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "Stamford Health Center for Integrative Medicine & Wellness COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "Gaylord Specialty Healthcare Post-COVID Outpatient Center",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "Nuvance COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "CT",
    "Specialties": ""
  },
  {
    "Business Name": "ChristianaCare Center for Virtual Health COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "DE",
    "Specialties": ""
  },
  {
    "Business Name": "Beebe Medical Group COVID Positive Care Center",
    "Doctor Name": "",
    "City": "",
    "State": "DE",
    "Specialties": ""
  },
  {
    "Business Name": "Children’s National Hospital Pediatric Post-COVID Program",
    "Doctor Name": "",
    "City": "",
    "State": "DC",
    "Specialties": ""
  },
  {
    "Business Name": "George Washington University: Covid-19 Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "DC",
    "Specialties": ""
  },
  {
    "Business Name": "MedStar Health COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "DC",
    "Specialties": ""
  },
  {
    "Business Name": "MedStar Health COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "DC",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "FL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "FL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "FL",
    "Specialties": ""
  },
  {
    "Business Name": "Arthritis & Rheumatic Disease Specialties (AARDS) COVID-19 Long Hauler Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "FL",
    "Specialties": ""
  },
  {
    "Business Name": "UF Health COVID RESTORE Treatment Program",
    "Doctor Name": "",
    "City": "",
    "State": "FL",
    "Specialties": ""
  },
  {
    "Business Name": "Memorial Primary Care Long Haulers Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "FL",
    "Specialties": ""
  },
  {
    "Business Name": "Watson Clinic Post COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "FL",
    "Specialties": ""
  },
  {
    "Business Name": "University of Miami Health System COVID-19 Heart Program",
    "Doctor Name": "",
    "City": "",
    "State": "FL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "AbsoluteCARE Medical Center and Pharmacy Long COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Emory Executive Park Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Piedmont Pulmonary COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Rehabilitation and Therapy Services at Augusta University Medical Center",
    "Doctor Name": "",
    "City": "",
    "State": "GA",
    "Specialties": ""
  },
  {
    "Business Name": "Guam Memorial Hospital Authority",
    "Doctor Name": "",
    "City": "",
    "State": "GU",
    "Specialties": ""
  },
  {
    "Business Name": "U.S. Naval Hospital Guam.",
    "Doctor Name": "",
    "City": "",
    "State": "GU",
    "Specialties": ""
  },
  {
    "Business Name": "The Queen’s Health Systems Post COVID Recovery and Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "HI",
    "Specialties": ""
  },
  {
    "Business Name": "Hawaii Pacific Health COVID-19 Virtual Clinic & Monitoring Program",
    "Doctor Name": "",
    "City": "",
    "State": "HI",
    "Specialties": ""
  },
  {
    "Business Name": "St. Luke's Clinic – COVID Recovery",
    "Doctor Name": "",
    "City": "",
    "State": "ID",
    "Specialties": ""
  },
  {
    "Business Name": "Rehabilitation Hospital of the Northwest",
    "Doctor Name": "",
    "City": "",
    "State": "ID",
    "Specialties": ""
  },
  {
    "Business Name": "Northern Idaho Acute Care Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "ID",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Advocate Health Care Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Humboldt Park Health Post-COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "University of Chicago Medicine Post COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Northwestern Medicine Comprehensive COVID-19 Center",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Northwestern Medicine Comprehensive COVID-19 Center",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Northwestern Medicine Comprehensive COVID-19 Center",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Northwestern Medicine Comprehensive COVID-19 Center",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Northwestern Medicine Comprehensive COVID-19 Center",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Northwestern Memorial Hospital Neuro Covid-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Shirley Ryan AbilityLab COVID Care Unit",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "UI Health Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Neurology COVID Clinic at Loyola Medicine",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Edward-Elmhurst Health Post-COVID Neuro Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Edward-Elmhurst Health Post-COVID Neuro Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Edward-Elmhurst Health Post-COVID Neuro Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Edward-Elmhurst Health Post-COVID Neuro Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Edward-Elmhurst Health Post-COVID Neuro Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Edward-Elmhurst Health Post-COVID Neuro Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Edward-Elmhurst Health Post-COVID Neuro Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "SIU Medicine Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IL",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "Parkview Physicians Group Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "IU Health ICU Survivor Center",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "Lafayette Regional Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "Rehabilitation Hospital of Northern Indiana Post-COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "IN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IA",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IA",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "IA",
    "Specialties": ""
  },
  {
    "Business Name": "On With Life Outpatient Post-COVID Neurological Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "IA",
    "Specialties": ""
  },
  {
    "Business Name": "On With Life Outpatient Post-COVID Neurological Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "IA",
    "Specialties": ""
  },
  {
    "Business Name": "University of Iowa Health Care Post COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "IA",
    "Specialties": ""
  },
  {
    "Business Name": "Post COVID-19 - The University Of Kansas Health System",
    "Doctor Name": "",
    "City": "",
    "State": "KS",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Norton Healthcare COVID-19 Long-Term Care Clinic- Adult",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Norton Healthcare COVID-19 Long-Term Care Clinic-Pediatric",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "UK HealthCare Pulmonary Rehabilitation Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "KY",
    "Specialties": ""
  },
  {
    "Business Name": "Tulane Neurology Post COVID Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "LA",
    "Specialties": ""
  },
  {
    "Business Name": "Children's Hospital New Orleans Post-COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "LA",
    "Specialties": ""
  },
  {
    "Business Name": "Bay State Physical Therapy Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "ME",
    "Specialties": ""
  },
  {
    "Business Name": "Bay State Physical Therapy Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "ME",
    "Specialties": ""
  },
  {
    "Business Name": "Bay State Physical Therapy Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "ME",
    "Specialties": ""
  },
  {
    "Business Name": "Kennedy Krieger Institute - Pediatric Post COVID-19 Rehabilitation Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "MD",
    "Specialties": ""
  },
  {
    "Business Name": "Johns Hopkins Medicine Post Acute COVID Team (PACT)",
    "Doctor Name": "",
    "City": "",
    "State": "MD",
    "Specialties": ""
  },
  {
    "Business Name": "UM Rehabilitation and Orthopaedic Institute COVID Recovery Rehabilitation Unit",
    "Doctor Name": "",
    "City": "",
    "State": "MD",
    "Specialties": ""
  },
  {
    "Business Name": "MedStar Health COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "MD",
    "Specialties": ""
  },
  {
    "Business Name": "Lawrence General Hospital Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Lawrence General Hospital Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Lawrence General Hospital Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Boston Children's Hospital Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Brigham and Women’s Hospital COVID Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Spaulding Rehabilitation Hospital Post COVID-19 Outpatient Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Beth Israel Deaconess Medical Center Critical Illness and COVID-19 Survivorship Program",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Emerson Hospital COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Newton-Wellesley Hospital - Rehabilitation Services Post-COVID Physical Therapy Program",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Motion PT Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Bay State Physical Therapy Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "MA",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MI",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MI",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MI",
    "Specialties": ""
  },
  {
    "Business Name": "Pediatric Post-COVID Syndrome Clinic at Michigan Medicine C.S. Mott Children’s Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "MI",
    "Specialties": ""
  },
  {
    "Business Name": "University of Michigan Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "MI",
    "Specialties": ""
  },
  {
    "Business Name": "Michigan Medicine Physical Medicine and Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "MI",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Hennepin Healthcare Post-Acute COVID-19 Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "M Health Fairview Adult Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Pediatric COVID-19 Clinic (mhealthfairview.org)",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "M Health Fairview ICU Survivorship Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Essentia Health Post COVID-19 Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Mayo Clinic COVID-19 Activity Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Courage Kenny Rehabilitation Institute-Allina Health",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Courage Kenny Rehabilitation Institute-Allina Health",
    "Doctor Name": "",
    "City": "",
    "State": "MN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MS",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "MS",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "MS",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "MS",
    "Specialties": ""
  },
  {
    "Business Name": "Recovery After COVID Clinic at Methodist Rehabilitation Center",
    "Doctor Name": "",
    "City": "",
    "State": "MS",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MO",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MO",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "MO",
    "Specialties": ""
  },
  {
    "Business Name": "North Kansas City Hospital Long COVID Rehab",
    "Doctor Name": "",
    "City": "",
    "State": "MO",
    "Specialties": ""
  },
  {
    "Business Name": "University Health Center for COVID Recovery",
    "Doctor Name": "",
    "City": "",
    "State": "MO",
    "Specialties": ""
  },
  {
    "Business Name": "University of Missouri COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "MO",
    "Specialties": ""
  },
  {
    "Business Name": "Washington University Complete Care Care and Recovery After COVID-19 (CARE) Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "MO",
    "Specialties": ""
  },
  {
    "Business Name": "University of Missouri-St. Louis Community Psychological Service",
    "Doctor Name": "",
    "City": "",
    "State": "MO",
    "Specialties": ""
  },
  {
    "Business Name": "Advanced Care Hospital of Montana",
    "Doctor Name": "",
    "City": "",
    "State": "MT",
    "Specialties": ""
  },
  {
    "Business Name": "Benefis Health System Post-COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "MT",
    "Specialties": ""
  },
  {
    "Business Name": "Children’s Hospital & Medical Center Clinic for Pediatric Long Haulers",
    "Doctor Name": "",
    "City": "",
    "State": "NE",
    "Specialties": ""
  },
  {
    "Business Name": "Nebraska Medicine Post COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NE",
    "Specialties": ""
  },
  {
    "Business Name": "UMC Southern Nevada Quick Care COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NV",
    "Specialties": ""
  },
  {
    "Business Name": "Center for Physical Therapy and Exercise (CPTE) Post Acute Covid Syndrome (PACS) PT-OT Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "NH",
    "Specialties": ""
  },
  {
    "Business Name": "Center Physical Therapy Exercise (CPTE)",
    "Doctor Name": "",
    "City": "",
    "State": "NH",
    "Specialties": ""
  },
  {
    "Business Name": "Center Physical Therapy Exercise (CPTE)",
    "Doctor Name": "",
    "City": "",
    "State": "NH",
    "Specialties": ""
  },
  {
    "Business Name": "Center Physical Therapy Exercise (CPTE)",
    "Doctor Name": "",
    "City": "",
    "State": "NH",
    "Specialties": ""
  },
  {
    "Business Name": "Center Physical Therapy Exercise (CPTE)",
    "Doctor Name": "",
    "City": "",
    "State": "NH",
    "Specialties": ""
  },
  {
    "Business Name": "Dartmouth-Hitchcock Post-Acute COVID Syndrome Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NH",
    "Specialties": ""
  },
  {
    "Business Name": "Deborah Heart and Lung Center Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Atlantic COVID Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Atlantic COVID Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Atlantic COVID Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Penn Medicine Post-COVID Assessment & Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Advantage Therapy Centers Post-COVID Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Advantage Therapy Centers Post-COVID Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Advantage Therapy Centers Post-COVID Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "CentraState Post-COVID Syndrome Treatment Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Hackensack Meridian Health's COVID Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Hackensack Meridian Health's COVID Recovery Center Rehabilitation Program at JFK Johnson Rehabilitation Institute",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Hackensack Meridian Children’s Health Pediatric COVID-19 Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "CarePoint Health COVID Care Center",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Monmouth Medical Center Southern Campus [MMCSC] Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Pediatric Post-COVID Care Program Barnabas Health",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Kessler Rehabilitation Center Recovery and Reconditioning Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "AtlantiCare Post-COVID-19 Long-Haul Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Saint Peter’s University Hospital Post-COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "University Hospital Comprehensive COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Deborah Heart and Lung Center Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "NJ",
    "Specialties": ""
  },
  {
    "Business Name": "Rehabilitation Hospital of Southern New Mexico",
    "Doctor Name": "",
    "City": "",
    "State": "NM",
    "Specialties": ""
  },
  {
    "Business Name": "Trustpoint Rehabilitation Hospital of Lubbock",
    "Doctor Name": "",
    "City": "",
    "State": "NM",
    "Specialties": ""
  },
  {
    "Business Name": "Lovelace Health System Post-COVID Recovery Services",
    "Doctor Name": "",
    "City": "",
    "State": "NM",
    "Specialties": ""
  },
  {
    "Business Name": "Albany Medical College Post-COVID Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Nathan Littauer Hospital & Nursing Home COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Northwell Health COVID Ambulatory Resource Support (CARES) Program",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Mount Sinai Center for Post-COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Mount Sinai Post-COVID Cardiac Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "NYU Langone Post-COVID Care Program",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Weill Cornell Medicine Post-ICU Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Columbia University - Virtual Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Columbia Primary Care Post COVID Care Program",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Dynamic Sports Physical Therapy Post Acute COVID Syndrome Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Pulmonary Wellness & Rehabilitation Complex",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Montefiore Department of Medicine CORE (COVID-19 Recovery) Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Maimonides Center for Post-COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Maimonides Doctors Brighton Beach Post-COVID Care Centers for Adults",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Maimonides Medical Center-Post-COVID Care Centers for Children",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Downstate University Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Jamaica Hospital Medical Center Post-COVID Care Center",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Sunnyview Rehabilitation Hospital Long-Haul COVID Program",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Richmond University Medical Center Post-COVID Care Center",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Richmond University Medical Center Post-COVID Care Center",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Staten Island University Hospital Post-COVID Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "NYU Langone Huntington Medical Group COVID-19 Recovery Care",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "NYU Langone Huntington Medical Group COVID-19 Recovery Care",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "NYU Langone Huntington Medical Group COVID-19 Recovery Care",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Stony Brook Medicine Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "St. Charles Hospital Post-COVID Outpatient Rehabilitation Program, Catholic Health Services",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "SPEAR Physical Therapy (Westchester)",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "WMCHealth Post-COVID-19 Recovery Program (Westchester Medical Centre Health Network)",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "St. John’s Riverside Hospital Post-COVID Care Program",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Ellenville Regional Hospital rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "NY",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Mountain Area Health Education Center (MAHEC) Internal Medicine Post-Acute COVID-19 Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "UNC Health COVID Recovery Clinic at the Center for Rehabilitation Care",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Flow Therapy Long COVID Treatment",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "WakeMed Rehabilitation Center COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Post COVID Recovery Care | Atrium Health",
    "Doctor Name": "",
    "City": "",
    "State": "NC",
    "Specialties": ""
  },
  {
    "Business Name": "Essentia Health COVID-rehab program",
    "Doctor Name": "",
    "City": "",
    "State": "ND",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "University Hospitals COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "University Hospitals COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "TriHealth PROS (Physical Rehabilitation Outpatient Specialists)",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "TriHealth PROS (Physical Rehabilitation Outpatient Specialists)",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Summa Health Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "UC Health’s Post COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Cleveland Clinic Post-COVID Cardiovascular Recovery Center",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Cleveland Clinic Post-ICU Recovery Clinic (PIRC)",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "MetroHealth Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "The Ohio State University Wexner Medical Center Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Memorial Health System Post COVID Care Center",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Memorial Health System Post COVID Care Center",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Metro Health Post COVID Clinic-Post-COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Southwest General COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Southwest General COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Southwest General COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Southwest General COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Southwest General COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Southwest General COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Southwest General COVID-19 Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Rehabilitation Hospital of the Northwest Ohio",
    "Doctor Name": "",
    "City": "",
    "State": "OH",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "OK",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "OK",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "OK",
    "Specialties": ""
  },
  {
    "Business Name": "INTEGRIS Health’s Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "OK",
    "Specialties": ""
  },
  {
    "Business Name": "Post-COVID Recovery Care Hillcrest HealthCare",
    "Doctor Name": "",
    "City": "",
    "State": "OK",
    "Specialties": ""
  },
  {
    "Business Name": "OHSU Long COVID Program",
    "Doctor Name": "",
    "City": "",
    "State": "OR",
    "Specialties": ""
  },
  {
    "Business Name": "Penn Medicine Lancaster General Health Post-COVID-19 Recovery and Rehabilitation Therapy",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Main Line Health Post-COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Penn Medicine’s Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Penn Medicine’s Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Temple Health Lung Center Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Temple Health Lung Center Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Temple Health Lung Center Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Temple Health Lung Center Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "University of Pittsburgh Medical Center (UPMC) Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Allegheny Health Network (AHN) Post-COVID-19 Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "WellSpan COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "St. Lukes COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "PA",
    "Specialties": ""
  },
  {
    "Business Name": "Clínica Post COVID-19 de Salud Integral en la Montaña, Inc., (SIM)",
    "Doctor Name": "",
    "City": "",
    "State": "PR",
    "Specialties": ""
  },
  {
    "Business Name": "Spaulding Rehabilitation Network Post COVID-19 Outpatient Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "RI",
    "Specialties": ""
  },
  {
    "Business Name": "Spaulding Rehabilitation Network Post COVID-19 Outpatient Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "RI",
    "Specialties": ""
  },
  {
    "Business Name": "Spaulding Rehabilitation Network Post COVID-19 Outpatient Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "RI",
    "Specialties": ""
  },
  {
    "Business Name": "Spaulding Rehabilitation Network Post COVID-19 Outpatient Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "RI",
    "Specialties": ""
  },
  {
    "Business Name": "Bay State Physical Therapy Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "RI",
    "Specialties": ""
  },
  {
    "Business Name": "Bay State Physical Therapy Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "RI",
    "Specialties": ""
  },
  {
    "Business Name": "Bay State Physical Therapy Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "RI",
    "Specialties": ""
  },
  {
    "Business Name": "Bay State Physical Therapy Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "RI",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Midlands Regional Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Greenwood Regional Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Spartanburg Rehabilitation Institute",
    "Doctor Name": "",
    "City": "",
    "State": "SC",
    "Specialties": ""
  },
  {
    "Business Name": "Post-COVID19 Recovery - Prairie Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SD",
    "Specialties": ""
  },
  {
    "Business Name": "Post-COVID19 Recovery - Prairie Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SD",
    "Specialties": ""
  },
  {
    "Business Name": "Post-COVID19 Recovery - Prairie Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SD",
    "Specialties": ""
  },
  {
    "Business Name": "Post-COVID19 Recovery - Prairie Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SD",
    "Specialties": ""
  },
  {
    "Business Name": "Post-COVID19 Recovery - Prairie Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SD",
    "Specialties": ""
  },
  {
    "Business Name": "Post-COVID19 Recovery - Prairie Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "SD",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Post-COVID Clinic at the Hixson Lung Center",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "New Life Medical Group Long COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Ballad Health Center for Post-COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Regional One Health Outpatient Center Post-COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Vanderbilt Adult Post-Acute COVID Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Ascension Medical Group Saint Thomas Post-Acute COVID Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TN",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Dignity Health COVID-19 and Chronic Illness Recovery and Reconditioning program",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Results Physiotherapy Post-Covid Rehabilitation",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Texas NeuroRehab Center COVID-19 Continuum Care Program",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "UT Health Austin Post-COVID-19 Program",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "South Texas Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Nexus Neurorecovery Center Post-COVID Program",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Corpus Christi Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "UT Southwestern Medical Center Department of Physical Medicine and Rehabilitation: COVID RECOVER",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "UT Southwestern Medical Center Department of Physical Medicine and Rehabilitation: COVID RECOVER",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "JPS Health Network COVID-19 Post-Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "University of Texas Medical Department (UTMB) Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Breathing Center of Houston Post COVID-19 Rehab Program",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Houston Methodist Advanced Lung Disease (Post COVID Care) Program",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "UTHealth COVID-19 Center of Excellence",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "UTHealth COVID-19 Center of Excellence",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Memorial Hermann Rehabilitation Network COVID-19 Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Laredo Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Trustpoint Rehabilitation Hospital of Lubbock",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Mesquite Rehabilitation Institute & Mesquite Specialty Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "South Texas Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "University Health’s Post-COVID Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "UT Health East Texas COVID-19 Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "University of Texas Medical Branch (UTMB) Post-COVID Recovery Clinic - Clear Lake Campus in Webster",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Weslaco Regional Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Baylor Post COVID Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "UTMB Health Post COVID Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "UT Health San Antonio",
    "Doctor Name": "",
    "City": "",
    "State": "TX",
    "Specialties": ""
  },
  {
    "Business Name": "Northern Utah Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "UT",
    "Specialties": ""
  },
  {
    "Business Name": "Utah Valley Specialty Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "UT",
    "Specialties": ""
  },
  {
    "Business Name": "Bateman Horne Center Long COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "UT",
    "Specialties": ""
  },
  {
    "Business Name": "The University of Utah Health Post-COVID Care Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "UT",
    "Specialties": ""
  },
  {
    "Business Name": "UVM Health Network COVID Recovery Program",
    "Doctor Name": "",
    "City": "",
    "State": "VT",
    "Specialties": ""
  },
  {
    "Business Name": "",
    "Doctor Name": "",
    "City": "",
    "State": "VI",
    "Specialties": ""
  },
  {
    "Business Name": "Centra Health Post-COVID Recovery Care Program",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "Sheltering Arms Post-Covid-19 Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "Sheltering Arms Post-Covid-19 Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "Inova Post COVID-19 Recovery and Rehabilitation Care Centers",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "Inova Post COVID-19 Recovery and Rehabilitation Care Centers",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "Inova Post COVID-19 Recovery and Rehabilitation Care Centers",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "Inova Post COVID-19 Recovery and Rehabilitation Care Centers",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "Inova Post COVID-19 Recovery and Rehabilitation Care Centers",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "Sentara Norfolk General Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "VCU Health Long COVID-19 Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "VA",
    "Specialties": ""
  },
  {
    "Business Name": "UW Medicine Post-COVID-19 Rehabilitation and Recovery Clinic at Harborview Medical Center",
    "Doctor Name": "",
    "City": "",
    "State": "WA",
    "Specialties": ""
  },
  {
    "Business Name": "UW Medicine Post-COVID Telehealth Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "WA",
    "Specialties": ""
  },
  {
    "Business Name": "Wheeling Hospital Post-COVID Outpatient Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "WV",
    "Specialties": ""
  },
  {
    "Business Name": "Prevea COVID-19 Recovery Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "WI",
    "Specialties": ""
  },
  {
    "Business Name": "Prevea COVID-19 Recovery Clinic Location- Multiple",
    "Doctor Name": "",
    "City": "",
    "State": "WI",
    "Specialties": ""
  },
  {
    "Business Name": "Prevea Health COVID Recovery Clinic- MAIN",
    "Doctor Name": "",
    "City": "",
    "State": "WI",
    "Specialties": ""
  },
  {
    "Business Name": "Bellin Health Long COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "WI",
    "Specialties": ""
  },
  {
    "Business Name": "Froedert & Medical College of Wisconsin Post-COVID Multispecialty Clinic",
    "Doctor Name": "",
    "City": "",
    "State": "WI",
    "Specialties": ""
  },
  {
    "Business Name": "Essentia Health Post COVID-19 Rehabilitation Program",
    "Doctor Name": "",
    "City": "",
    "State": "WI",
    "Specialties": ""
  },
  {
    "Business Name": "Ascension Medical Group Post-Acute COVID Care",
    "Doctor Name": "",
    "City": "",
    "State": "WI",
    "Specialties": ""
  },
  {
    "Business Name": "Courage Kenny Rehabilitation Institute-Allina Health",
    "Doctor Name": "",
    "City": "",
    "State": "WI",
    "Specialties": ""
  },
  {
    "Business Name": "Elkhorn Valley Rehabilitation Hospital",
    "Doctor Name": "",
    "City": "",
    "State": "WY",
    "Specialties": ""
  }
]`)

  output.value = res
}

</script>

<template>
  <header>
    <div>
    <h1>Find a reliable long COVID doctor and <br /> empower others to make informed decisions.</h1>
    <form @submit="handleSubmit">
      <div id="inputs">
        <div id="state">
          <select v-model="state">
            <option value="" disabled selected>State</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District Of Columbia">District Of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
        <div id="symptoms">
          <input placeholder="Symptoms (e.g. coughing, muscle aches)" v-model="symptoms" />
        </div>
    </div>
    <button type="submit">Go!</button>
    </form>
  </div>
  </header>

  <main>
    <h2>Results</h2>
    <p>{{ output }}</p>
  </main>
</template>

<style scoped>
  h1 {
    font-size: 60px;
    line-height: 1.25;
    margin-bottom: 100px;
    color: #EEE;
  }


  header {
    background: rgb(58,49,212);
    background: linear-gradient(90deg, rgba(58,49,212,1) 0%, rgba(0,153,255,1) 100%);
    height: 500px;
  }

  header > div {
    background-image: url("./assets/doctor.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 460px;
    padding: 80px 40px;
    height: 100%;
  }

  form {
    border: 2px solid black;
    border-radius: 4px;
    display: flex;
    align-items: flex-end;
    background-color: white;
  }

  #inputs {
    flex: 1;
    display: flex;
    padding: 12px 0;
  }

  #inputs > div {
    padding: 0 20px;
  }

  #state {
    flex: 1;
    border-right: 1px solid black;
  }

  #symptoms {
    flex: 2
  }

  button {
    align-self: stretch;
    width: 100px;
    border: 0;
    font-size: 20px;
    background-color: #ffcd42;
    cursor: pointer;
  }

  label {
    display: block;
  }

  input, select {
    width: 100%;
    height: 50px;
    padding-left: 10px;
    border: 0;
    font-size: 18px;
  }

  select:has(option[value=""]:checked) {
    color: gray;
  }

  select:focus, input:focus {
    outline: none;
  }

  main {
    padding: 40px;
  }

  main h2 {
    font-weight: bold;
  }

  main p {
    font-size: 18px;
  }

</style>
