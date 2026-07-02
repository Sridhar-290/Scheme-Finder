// Multi-language support for 12 Indian languages + English
export type LangCode = 'en' | 'hi' | 'bn' | 'te' | 'mr' | 'ta' | 'gu' | 'kn' | 'ml' | 'pa' | 'od' | 'ur' | 'as';

export const LANGUAGES: { code: LangCode; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
  { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'Malayalam', nativeLabel: 'മലയാളം' },
  { code: 'pa', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ' },
  { code: 'od', label: 'Odia', nativeLabel: 'ଓଡ଼ିଆ' },
  { code: 'ur', label: 'Urdu', nativeLabel: 'اردو' },
  { code: 'as', label: 'Assamese', nativeLabel: 'অসমীয়া' },
];

export type TranslationKeys = {
  // Nav
  nav_home: string;
  nav_browse: string;
  nav_find: string;
  nav_ai: string;
  nav_about: string;
  nav_tracker: string;
  nav_saved: string;
  nav_profile: string;
  nav_login: string;
  nav_logout: string;
  nav_compare: string;
  nav_stories: string;
  nav_checklist: string;

  // Home
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_browse: string;
  hero_search_placeholder: string;
  stats_total: string;
  stats_central: string;
  stats_state: string;
  stats_beneficiaries: string;
  featured_title: string;
  featured_subtitle: string;
  view_all: string;
  smart_discovery: string;
  smart_discovery_desc: string;
  ai_assistant: string;
  ai_assistant_desc: string;
  trusted_info: string;
  trusted_info_desc: string;
  schemes_near_me: string;
  schemes_near_me_desc: string;
  select_state: string;
  success_stories_title: string;
  success_stories_subtitle: string;
  read_more_stories: string;

  // Schemes
  browse_schemes: string;
  schemes_found: string;
  search_schemes: string;
  category: string;
  all_categories: string;
  scheme_type: string;
  all_types: string;
  central_govt: string;
  state_govt: string;
  gender: string;
  all_genders: string;
  male: string;
  female: string;
  transgender: string;
  age: string;
  reset_filters: string;
  no_schemes_found: string;
  adjust_filters: string;
  clear_filters: string;
  view_details: string;
  previous: string;
  next: string;
  filters: string;

  // Scheme Detail
  back_to_schemes: string;
  central_government: string;
  state_government: string;
  last_updated: string;
  share: string;
  save: string;
  saved: string;
  track_application: string;
  ready_to_apply: string;
  apply_on_website: string;
  key_benefits: string;
  eligibility_criteria: string;
  required_documents: string;
  application_process: string;
  faqs: string;
  rate_this_scheme: string;
  average_rating: string;
  compare: string;

  // Find / Wizard
  find_title: string;
  find_subtitle: string;
  personal_details: string;
  location: string;
  financial_status: string;
  what_is_age: string;
  select_gender: string;
  social_category: string;
  select_category: string;
  which_state: string;
  annual_income: string;
  income_hint: string;
  occupation_status: string;
  select_occupation: string;
  student: string;
  farmer: string;
  employed: string;
  self_employed: string;
  unemployed: string;
  homemaker: string;
  retired: string;
  back: string;
  continue_btn: string;
  show_results: string;
  checking: string;
  restored_answers: string;
  clear: string;
  start_over: string;

  // Results
  results_title: string;
  results_subtitle: string;
  high_match: string;
  partial_match: string;
  match_label: string;
  track_all: string;
  tracking: string;
  missing: string;
  top_schemes: string;
  personalized_dashboard: string;

  // AI
  ai_page_title: string;
  ai_page_subtitle: string;
  login_to_chat: string;
  new_chat: string;
  how_can_help: string;
  ask_anything: string;
  ai_disclaimer: string;
  send: string;
  doc_checklist: string;
  generate_checklist: string;

  // Tracker
  tracker_title: string;
  tracker_subtitle: string;
  add_scheme: string;
  not_started: string;
  applied: string;
  under_review: string;
  approved: string;
  rejected: string;
  congrats_approved: string;
  no_tracked: string;
  browse_to_track: string;
  update: string;
  update_status: string;
  status: string;
  notes: string;
  notes_placeholder: string;
  remove: string;
  deadline: string;
  set_deadline: string;
  deadline_approaching: string;
  share_benefits: string;

  // Saved
  saved_title: string;
  saved_subtitle: string;
  no_saved: string;
  no_saved_desc: string;
  export_pdf: string;

  // Compare
  compare_title: string;
  compare_subtitle: string;
  select_schemes: string;
  compare_now: string;
  clear_all: string;
  no_compare: string;
  schemes_selected: string;
  benefits: string;
  documents: string;
  income_limit: string;
  age_limit: string;
  state_label: string;

  // Success Stories
  stories_title: string;
  stories_subtitle: string;
  submit_story: string;
  your_name: string;
  your_state: string;
  scheme_name: string;
  your_story: string;
  submit: string;
  story_submitted: string;

  // Checklist
  checklist_title: string;
  checklist_subtitle: string;
  select_scheme: string;
  your_checklist: string;
  copy_checklist: string;
  checklist_ready: string;
  document_available: string;
  document_needed: string;

  // General
  loading: string;
  error: string;
  sign_in: string;
  sign_in_required: string;
  language: string;
};

type Translations = Record<LangCode, TranslationKeys>;

export const translations: Translations = {
  en: {
    nav_home: "Home",
    nav_browse: "Browse Schemes",
    nav_find: "Find Eligibility",
    nav_ai: "AI Assistant",
    nav_about: "About",
    nav_tracker: "Tracker",
    nav_saved: "Saved",
    nav_profile: "Profile",
    nav_login: "Login",
    nav_logout: "Logout",
    nav_compare: "Compare",
    nav_stories: "Success Stories",
    nav_checklist: "Document Checklist",
    hero_title: "Discover Government Benefits You Are Eligible For",
    hero_subtitle: "A trusted platform to find, understand, and apply for social welfare schemes across India.",
    hero_cta: "Find My Eligibility",
    hero_browse: "Browse All Schemes",
    hero_search_placeholder: "Search schemes by name or keyword...",
    stats_total: "Total Schemes",
    stats_central: "Central Govt Schemes",
    stats_state: "State Govt Schemes",
    stats_beneficiaries: "Beneficiaries Reached",
    featured_title: "Featured Schemes",
    featured_subtitle: "Explore some of the most impactful government initiatives currently active.",
    view_all: "View All Schemes",
    smart_discovery: "Smart Discovery",
    smart_discovery_desc: "Find schemes matched to your profile, location, and needs through our 3-step wizard.",
    ai_assistant: "AI Assistant",
    ai_assistant_desc: "Ask questions in plain language and get instant answers about eligibility and process.",
    trusted_info: "Trusted Information",
    trusted_info_desc: "Simplified, up-to-date data aggregated from official government portals.",
    schemes_near_me: "Schemes Near Me",
    schemes_near_me_desc: "Discover schemes specific to your state",
    select_state: "Select your state",
    success_stories_title: "Success Stories",
    success_stories_subtitle: "See how these schemes changed lives across India.",
    read_more_stories: "Read More Stories",
    browse_schemes: "Browse Schemes",
    schemes_found: "schemes found",
    search_schemes: "Search schemes...",
    category: "Category",
    all_categories: "All Categories",
    scheme_type: "Scheme Type",
    all_types: "All Types",
    central_govt: "Central Govt",
    state_govt: "State Govt",
    gender: "Gender",
    all_genders: "All Genders",
    male: "Male",
    female: "Female",
    transgender: "Transgender",
    age: "Age",
    reset_filters: "Reset Filters",
    no_schemes_found: "No schemes found",
    adjust_filters: "Try adjusting your filters or search query to find what you're looking for.",
    clear_filters: "Clear All Filters",
    view_details: "View Details →",
    previous: "Previous",
    next: "Next",
    filters: "Filters",
    back_to_schemes: "Back to schemes",
    central_government: "Central Government",
    state_government: "State Government",
    last_updated: "Last updated",
    share: "Share",
    save: "Save",
    saved: "Saved",
    track_application: "Track Application",
    ready_to_apply: "Ready to apply?",
    apply_on_website: "Apply on Official Website",
    key_benefits: "Key Benefits",
    eligibility_criteria: "Eligibility Criteria",
    required_documents: "Required Documents",
    application_process: "Application Process",
    faqs: "Frequently Asked Questions",
    rate_this_scheme: "Rate this scheme",
    average_rating: "Average rating",
    compare: "Compare",
    find_title: "Find Your Benefits",
    find_subtitle: "Answer a few questions to see what government schemes you qualify for.",
    personal_details: "Personal Details",
    location: "Location",
    financial_status: "Financial Status",
    what_is_age: "What is your age?",
    select_gender: "Select gender",
    social_category: "Social Category",
    select_category: "Select category",
    which_state: "Which state do you live in?",
    annual_income: "Annual Family Income (₹)",
    income_hint: "Approximate total income for the year",
    occupation_status: "Occupation Status",
    select_occupation: "Select occupation",
    student: "Student",
    farmer: "Farmer",
    employed: "Employed (Salaried)",
    self_employed: "Self Employed / Business",
    unemployed: "Unemployed",
    homemaker: "Homemaker",
    retired: "Retired / Pensioner",
    back: "Back",
    continue_btn: "Continue",
    show_results: "Show Results",
    checking: "Checking...",
    restored_answers: "Your previous answers were restored.",
    clear: "Clear",
    start_over: "Start Over",
    results_title: "Your Eligibility Results",
    results_subtitle: "Based on your profile, we've found several schemes you may be eligible for.",
    high_match: "High Match Schemes",
    partial_match: "Partial Match Schemes",
    match_label: "Match",
    track_all: "Track All",
    tracking: "Tracking",
    missing: "Missing",
    top_schemes: "Top Matching Schemes",
    personalized_dashboard: "Personalized Dashboard",
    ai_page_title: "AI Benefits Assistant",
    ai_page_subtitle: "Log in to chat with our AI assistant. Get personalized answers about schemes, eligibility, and the application process.",
    login_to_chat: "Log in to Chat",
    new_chat: "New Chat",
    how_can_help: "How can I help you today?",
    ask_anything: "Ask me anything about government schemes, eligibility rules, or the application process.",
    ai_disclaimer: "AI can make mistakes. Verify important information on official government portals.",
    send: "Send",
    doc_checklist: "Document Checklist",
    generate_checklist: "Generate Checklist",
    tracker_title: "Application Tracker",
    tracker_subtitle: "Track every scheme application from start to approval",
    add_scheme: "Add Scheme",
    not_started: "Not Started",
    applied: "Applied",
    under_review: "Under Review",
    approved: "Approved",
    rejected: "Rejected",
    congrats_approved: "Congratulations! You have approved schemes. Keep tracking to claim all your benefits.",
    no_tracked: "No applications tracked yet",
    browse_to_track: "Browse schemes and mark them as applied to start tracking",
    update: "Update",
    update_status: "Update Application Status",
    status: "Status",
    notes: "Notes (optional)",
    notes_placeholder: "Reference number, contact, next steps...",
    remove: "Remove",
    deadline: "Deadline",
    set_deadline: "Set a deadline",
    deadline_approaching: "Deadline approaching!",
    share_benefits: "Share My Benefits",
    saved_title: "Saved Schemes",
    saved_subtitle: "Keep track of schemes you are interested in applying for.",
    no_saved: "No saved schemes",
    no_saved_desc: "You haven't saved any schemes yet. Browse the directory to find and save schemes for quick access later.",
    export_pdf: "Export PDF",
    compare_title: "Compare Schemes",
    compare_subtitle: "Compare up to 3 schemes side by side to find the best fit for you.",
    select_schemes: "Select schemes to compare",
    compare_now: "Compare Now",
    clear_all: "Clear All",
    no_compare: "No schemes selected for comparison. Browse schemes and click the compare button.",
    schemes_selected: "schemes selected",
    benefits: "Benefits",
    documents: "Documents",
    income_limit: "Income Limit",
    age_limit: "Age Limit",
    state_label: "State",
    stories_title: "Success Stories",
    stories_subtitle: "Real stories from real people. See how government schemes have made a difference.",
    submit_story: "Share Your Story",
    your_name: "Your Name",
    your_state: "Your State",
    scheme_name: "Scheme Name",
    your_story: "Your Story",
    submit: "Submit",
    story_submitted: "Thank you! Your story has been submitted.",
    checklist_title: "Document Checklist Generator",
    checklist_subtitle: "Select a scheme and get a personalized document checklist based on your profile.",
    select_scheme: "Select a scheme",
    your_checklist: "Your Document Checklist",
    copy_checklist: "Copy Checklist",
    checklist_ready: "Your checklist is ready!",
    document_available: "I have this document",
    document_needed: "Need to arrange",
    loading: "Loading...",
    error: "Something went wrong",
    sign_in: "Sign In",
    sign_in_required: "Sign in to access this feature",
    language: "Language",
  },

  hi: {
    nav_home: "होम",
    nav_browse: "योजनाएं देखें",
    nav_find: "पात्रता जांचें",
    nav_ai: "AI सहायक",
    nav_about: "हमारे बारे में",
    nav_tracker: "ट्रैकर",
    nav_saved: "सहेजे गए",
    nav_profile: "प्रोफ़ाइल",
    nav_login: "लॉगिन",
    nav_logout: "लॉगआउट",
    nav_compare: "तुलना करें",
    nav_stories: "सफलता की कहानियां",
    nav_checklist: "दस्तावेज़ चेकलिस्ट",
    hero_title: "जानें आपके लिए कौन सी सरकारी योजनाएं हैं",
    hero_subtitle: "भारत भर की सामाजिक कल्याण योजनाओं को खोजने, समझने और आवेदन करने का विश्वसनीय मंच।",
    hero_cta: "मेरी पात्रता जांचें",
    hero_browse: "सभी योजनाएं देखें",
    hero_search_placeholder: "योजना का नाम या कीवर्ड खोजें...",
    stats_total: "कुल योजनाएं",
    stats_central: "केंद्र सरकार की योजनाएं",
    stats_state: "राज्य सरकार की योजनाएं",
    stats_beneficiaries: "लाभार्थी",
    featured_title: "प्रमुख योजनाएं",
    featured_subtitle: "वर्तमान में सक्रिय सबसे प्रभावशाली सरकारी पहलों का अन्वेषण करें।",
    view_all: "सभी योजनाएं देखें",
    smart_discovery: "स्मार्ट खोज",
    smart_discovery_desc: "3-चरणीय विज़ार्ड के माध्यम से अपनी प्रोफ़ाइल के अनुसार योजनाएं खोजें।",
    ai_assistant: "AI सहायक",
    ai_assistant_desc: "सरल भाषा में प्रश्न पूछें और पात्रता व प्रक्रिया के बारे में तुरंत उत्तर पाएं।",
    trusted_info: "विश्वसनीय जानकारी",
    trusted_info_desc: "सरकारी पोर्टलों से एकत्रित सरलीकृत और अद्यतन डेटा।",
    schemes_near_me: "मेरे पास की योजनाएं",
    schemes_near_me_desc: "अपने राज्य की विशिष्ट योजनाएं खोजें",
    select_state: "अपना राज्य चुनें",
    success_stories_title: "सफलता की कहानियां",
    success_stories_subtitle: "देखें कैसे इन योजनाओं ने पूरे भारत में जीवन बदला।",
    read_more_stories: "और कहानियां पढ़ें",
    browse_schemes: "योजनाएं देखें",
    schemes_found: "योजनाएं मिलीं",
    search_schemes: "योजनाएं खोजें...",
    category: "श्रेणी",
    all_categories: "सभी श्रेणियां",
    scheme_type: "योजना का प्रकार",
    all_types: "सभी प्रकार",
    central_govt: "केंद्र सरकार",
    state_govt: "राज्य सरकार",
    gender: "लिंग",
    all_genders: "सभी लिंग",
    male: "पुरुष",
    female: "महिला",
    transgender: "ट्रांसजेंडर",
    age: "आयु",
    reset_filters: "फ़िल्टर रीसेट करें",
    no_schemes_found: "कोई योजना नहीं मिली",
    adjust_filters: "जो आप ढूंढ रहे हैं उसे खोजने के लिए अपने फ़िल्टर समायोजित करें।",
    clear_filters: "सभी फ़िल्टर हटाएं",
    view_details: "विवरण देखें →",
    previous: "पिछला",
    next: "अगला",
    filters: "फ़िल्टर",
    back_to_schemes: "योजनाओं पर वापस",
    central_government: "केंद्र सरकार",
    state_government: "राज्य सरकार",
    last_updated: "अंतिम अपडेट",
    share: "शेयर करें",
    save: "सहेजें",
    saved: "सहेजा गया",
    track_application: "आवेदन ट्रैक करें",
    ready_to_apply: "आवेदन के लिए तैयार?",
    apply_on_website: "आधिकारिक वेबसाइट पर आवेदन करें",
    key_benefits: "मुख्य लाभ",
    eligibility_criteria: "पात्रता मानदंड",
    required_documents: "आवश्यक दस्तावेज",
    application_process: "आवेदन प्रक्रिया",
    faqs: "अक्सर पूछे जाने वाले प्रश्न",
    rate_this_scheme: "इस योजना को रेट करें",
    average_rating: "औसत रेटिंग",
    compare: "तुलना करें",
    find_title: "अपने लाभ खोजें",
    find_subtitle: "कुछ सवालों के जवाब दें और जानें कि आप किन सरकारी योजनाओं के लिए पात्र हैं।",
    personal_details: "व्यक्तिगत विवरण",
    location: "स्थान",
    financial_status: "आर्थिक स्थिति",
    what_is_age: "आपकी उम्र क्या है?",
    select_gender: "लिंग चुनें",
    social_category: "सामाजिक श्रेणी",
    select_category: "श्रेणी चुनें",
    which_state: "आप किस राज्य में रहते हैं?",
    annual_income: "वार्षिक पारिवारिक आय (₹)",
    income_hint: "वर्ष के लिए अनुमानित कुल आय",
    occupation_status: "व्यवसाय की स्थिति",
    select_occupation: "व्यवसाय चुनें",
    student: "छात्र",
    farmer: "किसान",
    employed: "नौकरीपेशा (वेतनभोगी)",
    self_employed: "स्वरोजगार / व्यवसाय",
    unemployed: "बेरोजगार",
    homemaker: "गृहिणी",
    retired: "सेवानिवृत्त / पेंशनभोगी",
    back: "पीछे",
    continue_btn: "जारी रखें",
    show_results: "परिणाम दिखाएं",
    checking: "जांच हो रही है...",
    restored_answers: "आपके पिछले उत्तर बहाल किए गए।",
    clear: "साफ करें",
    start_over: "फिर से शुरू करें",
    results_title: "आपके पात्रता परिणाम",
    results_subtitle: "आपकी प्रोफ़ाइल के आधार पर, हमने कई योजनाएं पाई हैं जिनके लिए आप पात्र हो सकते हैं।",
    high_match: "उच्च मिलान योजनाएं",
    partial_match: "आंशिक मिलान योजनाएं",
    match_label: "मिलान",
    track_all: "सभी ट्रैक करें",
    tracking: "ट्रैकिंग",
    missing: "अनुपलब्ध",
    top_schemes: "शीर्ष मिलान योजनाएं",
    personalized_dashboard: "व्यक्तिगत डैशबोर्ड",
    ai_page_title: "AI लाभ सहायक",
    ai_page_subtitle: "AI सहायक से चैट करने के लिए लॉग इन करें।",
    login_to_chat: "चैट के लिए लॉग इन करें",
    new_chat: "नई चैट",
    how_can_help: "आज मैं आपकी कैसे मदद कर सकता हूं?",
    ask_anything: "सरकारी योजनाओं, पात्रता नियमों या आवेदन प्रक्रिया के बारे में कुछ भी पूछें।",
    ai_disclaimer: "AI गलतियां कर सकता है। आधिकारिक सरकारी पोर्टलों पर महत्वपूर्ण जानकारी सत्यापित करें।",
    send: "भेजें",
    doc_checklist: "दस्तावेज़ चेकलिस्ट",
    generate_checklist: "चेकलिस्ट बनाएं",
    tracker_title: "आवेदन ट्रैकर",
    tracker_subtitle: "हर योजना आवेदन को शुरू से मंजूरी तक ट्रैक करें",
    add_scheme: "योजना जोड़ें",
    not_started: "शुरू नहीं हुआ",
    applied: "आवेदन किया",
    under_review: "समीक्षाधीन",
    approved: "स्वीकृत",
    rejected: "अस्वीकृत",
    congrats_approved: "बधाई! आपकी योजनाएं स्वीकृत हुईं। सभी लाभ प्राप्त करने के लिए ट्रैकिंग जारी रखें।",
    no_tracked: "अभी तक कोई आवेदन ट्रैक नहीं किया",
    browse_to_track: "ट्रैकिंग शुरू करने के लिए योजनाएं ब्राउज़ करें",
    update: "अपडेट",
    update_status: "आवेदन स्थिति अपडेट करें",
    status: "स्थिति",
    notes: "नोट्स (वैकल्पिक)",
    notes_placeholder: "संदर्भ संख्या, संपर्क, अगले कदम...",
    remove: "हटाएं",
    deadline: "समय सीमा",
    set_deadline: "समय सीमा निर्धारित करें",
    deadline_approaching: "समय सीमा नज़दीक है!",
    share_benefits: "मेरे लाभ शेयर करें",
    saved_title: "सहेजी गई योजनाएं",
    saved_subtitle: "जिन योजनाओं में आप रुचि रखते हैं उन पर नज़र रखें।",
    no_saved: "कोई सहेजी गई योजना नहीं",
    no_saved_desc: "आपने अभी तक कोई योजना सहेजी नहीं है।",
    export_pdf: "PDF डाउनलोड करें",
    compare_title: "योजनाओं की तुलना करें",
    compare_subtitle: "सर्वोत्तम योजना खोजने के लिए 3 योजनाओं की तुलना करें।",
    select_schemes: "तुलना के लिए योजनाएं चुनें",
    compare_now: "अभी तुलना करें",
    clear_all: "सभी हटाएं",
    no_compare: "तुलना के लिए कोई योजना नहीं चुनी। योजनाएं ब्राउज़ करें।",
    schemes_selected: "योजनाएं चुनी गईं",
    benefits: "लाभ",
    documents: "दस्तावेज",
    income_limit: "आय सीमा",
    age_limit: "आयु सीमा",
    state_label: "राज्य",
    stories_title: "सफलता की कहानियां",
    stories_subtitle: "देखें कैसे सरकारी योजनाओं ने लोगों की जिंदगी बदली।",
    submit_story: "अपनी कहानी साझा करें",
    your_name: "आपका नाम",
    your_state: "आपका राज्य",
    scheme_name: "योजना का नाम",
    your_story: "आपकी कहानी",
    submit: "जमा करें",
    story_submitted: "धन्यवाद! आपकी कहानी जमा हो गई है।",
    checklist_title: "दस्तावेज़ चेकलिस्ट जनरेटर",
    checklist_subtitle: "एक योजना चुनें और अपनी प्रोफ़ाइल के आधार पर व्यक्तिगत दस्तावेज़ चेकलिस्ट प्राप्त करें।",
    select_scheme: "योजना चुनें",
    your_checklist: "आपकी दस्तावेज़ चेकलिस्ट",
    copy_checklist: "चेकलिस्ट कॉपी करें",
    checklist_ready: "आपकी चेकलिस्ट तैयार है!",
    document_available: "यह दस्तावेज़ मेरे पास है",
    document_needed: "प्राप्त करना आवश्यक है",
    loading: "लोड हो रहा है...",
    error: "कुछ गलत हो गया",
    sign_in: "साइन इन करें",
    sign_in_required: "इस सुविधा तक पहुंचने के लिए साइन इन करें",
    language: "भाषा",
  },

  bn: {
    nav_home: "হোম", nav_browse: "প্রকল্প দেখুন", nav_find: "যোগ্যতা যাচাই", nav_ai: "AI সহায়ক", nav_about: "আমাদের সম্পর্কে", nav_tracker: "ট্র্যাকার", nav_saved: "সংরক্ষিত", nav_profile: "প্রোফাইল", nav_login: "লগইন", nav_logout: "লগআউট", nav_compare: "তুলনা করুন", nav_stories: "সাফল্যের গল্প", nav_checklist: "নথি চেকলিস্ট",
    hero_title: "আপনার জন্য কোন সরকারি সুবিধা আছে জানুন", hero_subtitle: "সারা ভারতে সামাজিক কল্যাণ প্রকল্প খুঁজুন, বুঝুন এবং আবেদন করুন।", hero_cta: "আমার যোগ্যতা যাচাই করুন", hero_browse: "সব প্রকল্প দেখুন", hero_search_placeholder: "প্রকল্পের নাম বা কীওয়ার্ড খুঁজুন...",
    stats_total: "মোট প্রকল্প", stats_central: "কেন্দ্রীয় সরকারের প্রকল্প", stats_state: "রাজ্য সরকারের প্রকল্প", stats_beneficiaries: "সুবিধাভোগী",
    featured_title: "বৈশিষ্ট্যযুক্ত প্রকল্প", featured_subtitle: "বর্তমানে সক্রিয় সবচেয়ে প্রভাবশালী সরকারি উদ্যোগগুলি দেখুন।", view_all: "সব প্রকল্প দেখুন",
    smart_discovery: "স্মার্ট অনুসন্ধান", smart_discovery_desc: "আপনার প্রোফাইল অনুযায়ী প্রকল্প খুঁজুন।", ai_assistant: "AI সহায়ক", ai_assistant_desc: "সহজ ভাষায় প্রশ্ন করুন এবং তাৎক্ষণিক উত্তর পান।", trusted_info: "বিশ্বস্ত তথ্য", trusted_info_desc: "সরকারি পোর্টাল থেকে সরলীকৃত তথ্য।",
    schemes_near_me: "আমার কাছের প্রকল্প", schemes_near_me_desc: "আপনার রাজ্যের নির্দিষ্ট প্রকল্প খুঁজুন", select_state: "আপনার রাজ্য নির্বাচন করুন",
    success_stories_title: "সাফল্যের গল্প", success_stories_subtitle: "দেখুন কীভাবে এই প্রকল্পগুলি জীবন বদলেছে।", read_more_stories: "আরও গল্প পড়ুন",
    browse_schemes: "প্রকল্প দেখুন", schemes_found: "প্রকল্প পাওয়া গেছে", search_schemes: "প্রকল্প খুঁজুন...", category: "বিভাগ", all_categories: "সব বিভাগ", scheme_type: "প্রকল্পের ধরন", all_types: "সব ধরন", central_govt: "কেন্দ্রীয় সরকার", state_govt: "রাজ্য সরকার", gender: "লিঙ্গ", all_genders: "সব লিঙ্গ", male: "পুরুষ", female: "মহিলা", transgender: "তৃতীয় লিঙ্গ", age: "বয়স", reset_filters: "ফিল্টার রিসেট করুন", no_schemes_found: "কোনো প্রকল্প পাওয়া যায়নি", adjust_filters: "ফিল্টার পরিবর্তন করুন।", clear_filters: "সব ফিল্টার মুছুন", view_details: "বিস্তারিত দেখুন →", previous: "আগের", next: "পরের", filters: "ফিল্টার",
    back_to_schemes: "প্রকল্পে ফিরুন", central_government: "কেন্দ্রীয় সরকার", state_government: "রাজ্য সরকার", last_updated: "শেষ আপডেট", share: "শেয়ার করুন", save: "সংরক্ষণ", saved: "সংরক্ষিত", track_application: "আবেদন ট্র্যাক করুন", ready_to_apply: "আবেদনের জন্য প্রস্তুত?", apply_on_website: "অফিসিয়াল ওয়েবসাইটে আবেদন করুন", key_benefits: "মূল সুবিধা", eligibility_criteria: "যোগ্যতার মানদণ্ড", required_documents: "প্রয়োজনীয় নথি", application_process: "আবেদন প্রক্রিয়া", faqs: "প্রায়শই জিজ্ঞাসিত প্রশ্ন", rate_this_scheme: "এই প্রকল্পকে রেট করুন", average_rating: "গড় রেটিং", compare: "তুলনা করুন",
    find_title: "আপনার সুবিধা খুঁজুন", find_subtitle: "কিছু প্রশ্নের উত্তর দিন।", personal_details: "ব্যক্তিগত বিবরণ", location: "অবস্থান", financial_status: "আর্থিক অবস্থা", what_is_age: "আপনার বয়স কত?", select_gender: "লিঙ্গ নির্বাচন করুন", social_category: "সামাজিক বিভাগ", select_category: "বিভাগ নির্বাচন করুন", which_state: "আপনি কোন রাজ্যে থাকেন?", annual_income: "বার্ষিক পারিবারিক আয় (₹)", income_hint: "বছরের আনুমানিক মোট আয়", occupation_status: "পেশার অবস্থা", select_occupation: "পেশা নির্বাচন করুন", student: "ছাত্র", farmer: "কৃষক", employed: "চাকরিজীবী", self_employed: "স্বনিযুক্ত / ব্যবসা", unemployed: "বেকার", homemaker: "গৃহিণী", retired: "অবসরপ্রাপ্ত", back: "পিছনে", continue_btn: "চালিয়ে যান", show_results: "ফলাফল দেখান", checking: "যাচাই হচ্ছে...", restored_answers: "আপনার আগের উত্তর পুনরুদ্ধার করা হয়েছে।", clear: "মুছুন", start_over: "আবার শুরু করুন",
    results_title: "আপনার যোগ্যতার ফলাফল", results_subtitle: "আপনার প্রোফাইলের ভিত্তিতে প্রকল্প পাওয়া গেছে।", high_match: "উচ্চ মিল প্রকল্প", partial_match: "আংশিক মিল প্রকল্প", match_label: "মিল", track_all: "সব ট্র্যাক করুন", tracking: "ট্র্যাকিং", missing: "অনুপলব্ধ", top_schemes: "শীর্ষ মিলিত প্রকল্প", personalized_dashboard: "ব্যক্তিগত ড্যাশবোর্ড",
    ai_page_title: "AI সুবিধা সহায়ক", ai_page_subtitle: "AI সহায়কের সাথে চ্যাট করতে লগ ইন করুন।", login_to_chat: "চ্যাটের জন্য লগ ইন করুন", new_chat: "নতুন চ্যাট", how_can_help: "আজ কীভাবে সাহায্য করতে পারি?", ask_anything: "সরকারি প্রকল্প সম্পর্কে কিছু জিজ্ঞাসা করুন।", ai_disclaimer: "AI ভুল করতে পারে। সরকারি পোর্টালে যাচাই করুন।", send: "পাঠান", doc_checklist: "নথি চেকলিস্ট", generate_checklist: "চেকলিস্ট তৈরি করুন",
    tracker_title: "আবেদন ট্র্যাকার", tracker_subtitle: "প্রতিটি আবেদন ট্র্যাক করুন", add_scheme: "প্রকল্প যোগ করুন", not_started: "শুরু হয়নি", applied: "আবেদন করা হয়েছে", under_review: "পর্যালোচনাধীন", approved: "অনুমোদিত", rejected: "প্রত্যাখ্যাত", congrats_approved: "অভিনন্দন! আপনার প্রকল্প অনুমোদিত হয়েছে।", no_tracked: "এখনো কোনো আবেদন ট্র্যাক করা হয়নি", browse_to_track: "ট্র্যাকিং শুরু করতে প্রকল্প দেখুন", update: "আপডেট", update_status: "আবেদনের অবস্থা আপডেট করুন", status: "অবস্থা", notes: "নোট (ঐচ্ছিক)", notes_placeholder: "রেফারেন্স নম্বর, যোগাযোগ...", remove: "সরান", deadline: "সময়সীমা", set_deadline: "সময়সীমা নির্ধারণ করুন", deadline_approaching: "সময়সীমা কাছে আসছে!", share_benefits: "আমার সুবিধা শেয়ার করুন",
    saved_title: "সংরক্ষিত প্রকল্প", saved_subtitle: "আপনার আগ্রহের প্রকল্পগুলি ট্র্যাক করুন।", no_saved: "কোনো সংরক্ষিত প্রকল্প নেই", no_saved_desc: "এখনো কোনো প্রকল্প সংরক্ষণ করেননি।", export_pdf: "PDF ডাউনলোড করুন",
    compare_title: "প্রকল্পের তুলনা", compare_subtitle: "৩টি প্রকল্পের তুলনা করুন।", select_schemes: "তুলনার জন্য প্রকল্প নির্বাচন করুন", compare_now: "এখনই তুলনা করুন", clear_all: "সব মুছুন", no_compare: "তুলনার জন্য কোনো প্রকল্প নির্বাচিত হয়নি।", schemes_selected: "প্রকল্প নির্বাচিত", benefits: "সুবিধা", documents: "নথি", income_limit: "আয়ের সীমা", age_limit: "বয়সের সীমা", state_label: "রাজ্য",
    stories_title: "সাফল্যের গল্প", stories_subtitle: "দেখুন কীভাবে সরকারি প্রকল্প মানুষের জীবন বদলেছে।", submit_story: "আপনার গল্প শেয়ার করুন", your_name: "আপনার নাম", your_state: "আপনার রাজ্য", scheme_name: "প্রকল্পের নাম", your_story: "আপনার গল্প", submit: "জমা দিন", story_submitted: "ধন্যবাদ! আপনার গল্প জমা হয়েছে।",
    checklist_title: "নথি চেকলিস্ট জেনারেটর", checklist_subtitle: "একটি প্রকল্প নির্বাচন করুন।", select_scheme: "প্রকল্প নির্বাচন করুন", your_checklist: "আপনার নথি চেকলিস্ট", copy_checklist: "চেকলিস্ট কপি করুন", checklist_ready: "আপনার চেকলিস্ট প্রস্তুত!", document_available: "এই নথি আমার কাছে আছে", document_needed: "সংগ্রহ করতে হবে",
    loading: "লোড হচ্ছে...", error: "কিছু ভুল হয়েছে", sign_in: "সাইন ইন করুন", sign_in_required: "সাইন ইন করুন", language: "ভাষা",
  },

  te: {
    nav_home: "హోమ్", nav_browse: "పథకాలు చూడండి", nav_find: "అర్హత తనిఖీ", nav_ai: "AI సహాయకుడు", nav_about: "మా గురించి", nav_tracker: "ట్రాకర్", nav_saved: "సేవ్ చేసినవి", nav_profile: "ప్రొఫైల్", nav_login: "లాగిన్", nav_logout: "లాగౌట్", nav_compare: "పోల్చండి", nav_stories: "విజయ కథలు", nav_checklist: "డాక్యుమెంట్ చెక్‌లిస్ట్",
    hero_title: "మీ కోసం ఏ ప్రభుత్వ పథకాలు ఉన్నాయో తెలుసుకోండి", hero_subtitle: "భారతదేశం అంతటా సంక్షేమ పథకాలను కనుగొనండి.", hero_cta: "నా అర్హత తనిఖీ చేయండి", hero_browse: "అన్ని పథకాలు చూడండి", hero_search_placeholder: "పథకం పేరు లేదా కీవర్డ్ శోధించండి...",
    stats_total: "మొత్తం పథకాలు", stats_central: "కేంద్ర ప్రభుత్వ పథకాలు", stats_state: "రాష్ట్ర ప్రభుత్వ పథకాలు", stats_beneficiaries: "లబ్ధిదారులు",
    featured_title: "ప్రముఖ పథకాలు", featured_subtitle: "ప్రస్తుతం చురుకుగా ఉన్న పథకాలు.", view_all: "అన్ని పథకాలు చూడండి",
    smart_discovery: "స్మార్ట్ డిస్కవరీ", smart_discovery_desc: "మీ ప్రొఫైల్ ప్రకారం పథకాలు కనుగొనండి.", ai_assistant: "AI సహాయకుడు", ai_assistant_desc: "సాధారణ భాషలో ప్రశ్నలు అడగండి.", trusted_info: "నమ్మదగిన సమాచారం", trusted_info_desc: "ప్రభుత్వ పోర్టల్‌ల నుండి సమాచారం.",
    schemes_near_me: "నా దగ్గరి పథకాలు", schemes_near_me_desc: "మీ రాష్ట్ర పథకాలు కనుగొనండి", select_state: "మీ రాష్ట్రాన్ని ఎంచుకోండి",
    success_stories_title: "విజయ కథలు", success_stories_subtitle: "పథకాలు జీవితాలను ఎలా మార్చాయో చూడండి.", read_more_stories: "మరిన్ని కథలు చదవండి",
    browse_schemes: "పథకాలు చూడండి", schemes_found: "పథకాలు కనుగొనబడ్డాయి", search_schemes: "పథకాలు శోధించండి...", category: "వర్గం", all_categories: "అన్ని వర్గాలు", scheme_type: "పథకం రకం", all_types: "అన్ని రకాలు", central_govt: "కేంద్ర ప్రభుత్వం", state_govt: "రాష్ట్ర ప్రభుత్వం", gender: "లింగం", all_genders: "అన్ని లింగాలు", male: "పురుషుడు", female: "స్త్రీ", transgender: "ట్రాన్స్‌జెండర్", age: "వయస్సు", reset_filters: "ఫిల్టర్‌లు రీసెట్ చేయండి", no_schemes_found: "పథకాలు కనుగొనబడలేదు", adjust_filters: "ఫిల్టర్‌లు సర్దుబాటు చేయండి.", clear_filters: "అన్ని ఫిల్టర్‌లు తొలగించండి", view_details: "వివరాలు చూడండి →", previous: "మునుపటి", next: "తదుపరి", filters: "ఫిల్టర్‌లు",
    back_to_schemes: "పథకాలకు తిరిగి", central_government: "కేంద్ర ప్రభుత్వం", state_government: "రాష్ట్ర ప్రభుత్వం", last_updated: "చివరి అప్‌డేట్", share: "షేర్ చేయండి", save: "సేవ్ చేయండి", saved: "సేవ్ చేయబడింది", track_application: "దరఖాస్తు ట్రాక్ చేయండి", ready_to_apply: "దరఖాస్తుకు సిద్ధమా?", apply_on_website: "అధికారిక వెబ్‌సైట్‌లో దరఖాస్తు చేయండి", key_benefits: "ప్రధాన ప్రయోజనాలు", eligibility_criteria: "అర్హత ప్రమాణాలు", required_documents: "అవసరమైన పత్రాలు", application_process: "దరఖాస్తు ప్రక్రియ", faqs: "తరచుగా అడిగే ప్రశ్నలు", rate_this_scheme: "ఈ పథకాన్ని రేట్ చేయండి", average_rating: "సగటు రేటింగ్", compare: "పోల్చండి",
    find_title: "మీ ప్రయోజనాలు కనుగొనండి", find_subtitle: "కొన్ని ప్రశ్నలకు జవాబు ఇవ్వండి.", personal_details: "వ్యక్తిగత వివరాలు", location: "ప్రదేశం", financial_status: "ఆర్థిక స్థితి", what_is_age: "మీ వయస్సు ఎంత?", select_gender: "లింగం ఎంచుకోండి", social_category: "సామాజిక వర్గం", select_category: "వర్గం ఎంచుకోండి", which_state: "మీరు ఏ రాష్ట్రంలో ఉంటారు?", annual_income: "వార్షిక కుటుంబ ఆదాయం (₹)", income_hint: "ఏడాదికి అంచనా ఆదాయం", occupation_status: "వృత్తి స్థితి", select_occupation: "వృత్తి ఎంచుకోండి", student: "విద్యార్థి", farmer: "రైతు", employed: "ఉద్యోగి", self_employed: "స్వయం ఉపాధి / వ్యాపారం", unemployed: "నిరుద్యోగి", homemaker: "గృహిణి", retired: "రిటైర్డ్", back: "వెనుకకు", continue_btn: "కొనసాగించండి", show_results: "ఫలితాలు చూపించు", checking: "తనిఖీ అవుతోంది...", restored_answers: "మీ మునుపటి సమాధానాలు పునరుద్ధరించబడ్డాయి.", clear: "తొలగించు", start_over: "మళ్ళీ ప్రారంభించు",
    results_title: "మీ అర్హత ఫలితాలు", results_subtitle: "మీ ప్రొఫైల్ ఆధారంగా పథకాలు.", high_match: "అధిక సరిపోలిక", partial_match: "పాక్షిక సరిపోలిక", match_label: "సరిపోలిక", track_all: "అన్నీ ట్రాక్ చేయండి", tracking: "ట్రాకింగ్", missing: "లేదు", top_schemes: "టాప్ పథకాలు", personalized_dashboard: "వ్యక్తిగత డాష్‌బోర్డ్",
    ai_page_title: "AI సహాయకుడు", ai_page_subtitle: "AI సహాయకుడితో చాట్ చేయడానికి లాగిన్ అవ్వండి.", login_to_chat: "చాట్ కోసం లాగిన్", new_chat: "కొత్త చాట్", how_can_help: "ఈ రోజు ఎలా సహాయం చేయగలను?", ask_anything: "ప్రభుత్వ పథకాల గురించి అడగండి.", ai_disclaimer: "AI తప్పులు చేయవచ్చు. ప్రభుత్వ పోర్టల్‌లలో ధృవీకరించండి.", send: "పంపండి", doc_checklist: "డాక్యుమెంట్ చెక్‌లిస్ట్", generate_checklist: "చెక్‌లిస్ట్ రూపొందించండి",
    tracker_title: "దరఖాస్తు ట్రాకర్", tracker_subtitle: "ప్రతి దరఖాస్తును ట్రాక్ చేయండి", add_scheme: "పథకం చేర్చండి", not_started: "ప్రారంభం కాలేదు", applied: "దరఖాస్తు చేశారు", under_review: "సమీక్షలో", approved: "ఆమోదించబడింది", rejected: "తిరస్కరించబడింది", congrats_approved: "అభినందనలు! మీ పథకాలు ఆమోదించబడ్డాయి.", no_tracked: "ఇంకా ట్రాక్ చేయలేదు", browse_to_track: "ట్రాకింగ్ కోసం పథకాలు చూడండి", update: "అప్‌డేట్", update_status: "స్థితి అప్‌డేట్ చేయండి", status: "స్థితి", notes: "నోట్స్ (ఐచ్ఛికం)", notes_placeholder: "రిఫరెన్స్ నంబర్, సంప్రదింపు...", remove: "తొలగించు", deadline: "గడువు", set_deadline: "గడువు నిర్ణయించండి", deadline_approaching: "గడువు సమీపిస్తోంది!", share_benefits: "నా ప్రయోజనాలు షేర్ చేయండి",
    saved_title: "సేవ్ చేసిన పథకాలు", saved_subtitle: "మీ ఆసక్తి పథకాలు ట్రాక్ చేయండి.", no_saved: "సేవ్ చేసిన పథకాలు లేవు", no_saved_desc: "ఇంకా పథకాలు సేవ్ చేయలేదు.", export_pdf: "PDF డౌన్‌లోడ్ చేయండి",
    compare_title: "పథకాల పోలిక", compare_subtitle: "3 పథకాలు పోల్చండి.", select_schemes: "పోలిక కోసం పథకాలు ఎంచుకోండి", compare_now: "ఇప్పుడు పోల్చండి", clear_all: "అన్నీ తొలగించండి", no_compare: "పోలిక కోసం పథకాలు ఎంచుకోలేదు.", schemes_selected: "పథకాలు ఎంచుకున్నారు", benefits: "ప్రయోజనాలు", documents: "పత్రాలు", income_limit: "ఆదాయ పరిమితి", age_limit: "వయస్సు పరిమితి", state_label: "రాష్ట్రం",
    stories_title: "విజయ కథలు", stories_subtitle: "ప్రభుత్వ పథకాలు జీవితాలను ఎలా మార్చాయి.", submit_story: "మీ కథ చెప్పండి", your_name: "మీ పేరు", your_state: "మీ రాష్ట్రం", scheme_name: "పథకం పేరు", your_story: "మీ కథ", submit: "సమర్పించండి", story_submitted: "ధన్యవాదాలు! మీ కథ సమర్పించబడింది.",
    checklist_title: "డాక్యుమెంట్ చెక్‌లిస్ట్ జనరేటర్", checklist_subtitle: "పథకం ఎంచుకోండి.", select_scheme: "పథకం ఎంచుకోండి", your_checklist: "మీ డాక్యుమెంట్ చెక్‌లిస్ట్", copy_checklist: "చెక్‌లిస్ట్ కాపీ చేయండి", checklist_ready: "మీ చెక్‌లిస్ట్ సిద్ధం!", document_available: "ఈ పత్రం నా దగ్గర ఉంది", document_needed: "సేకరించాలి",
    loading: "లోడ్ అవుతోంది...", error: "ఏదో తప్పు జరిగింది", sign_in: "సైన్ ఇన్ చేయండి", sign_in_required: "సైన్ ఇన్ అవసరం", language: "భాష",
  },

  mr: {
    nav_home: "मुख्यपृष्ठ", nav_browse: "योजना पहा", nav_find: "पात्रता तपासा", nav_ai: "AI सहाय्यक", nav_about: "आमच्याबद्दल", nav_tracker: "ट्रॅकर", nav_saved: "सेव्ह केलेले", nav_profile: "प्रोफाइल", nav_login: "लॉगिन", nav_logout: "लॉगआउट", nav_compare: "तुलना करा", nav_stories: "यशोगाथा", nav_checklist: "कागदपत्र चेकलिस्ट",
    hero_title: "तुमच्यासाठी कोणत्या सरकारी योजना आहेत ते शोधा", hero_subtitle: "संपूर्ण भारतातील सामाजिक कल्याण योजना शोधा.", hero_cta: "माझी पात्रता तपासा", hero_browse: "सर्व योजना पहा", hero_search_placeholder: "योजनेचे नाव किंवा कीवर्ड शोधा...",
    stats_total: "एकूण योजना", stats_central: "केंद्र सरकारच्या योजना", stats_state: "राज्य सरकारच्या योजना", stats_beneficiaries: "लाभार्थी",
    featured_title: "वैशिष्ट्यपूर्ण योजना", featured_subtitle: "सध्या सक्रिय असलेल्या प्रभावी योजना.", view_all: "सर्व योजना पहा",
    smart_discovery: "स्मार्ट शोध", smart_discovery_desc: "तुमच्या प्रोफाइलनुसार योजना शोधा.", ai_assistant: "AI सहाय्यक", ai_assistant_desc: "सोप्या भाषेत प्रश्न विचारा.", trusted_info: "विश्वसनीय माहिती", trusted_info_desc: "सरकारी पोर्टलवरील अद्ययावत माहिती.",
    schemes_near_me: "माझ्या जवळच्या योजना", schemes_near_me_desc: "तुमच्या राज्यातील योजना शोधा", select_state: "तुमचे राज्य निवडा",
    success_stories_title: "यशोगाथा", success_stories_subtitle: "योजनांनी आयुष्य कसे बदलले ते पहा.", read_more_stories: "अधिक गोष्टी वाचा",
    browse_schemes: "योजना पहा", schemes_found: "योजना सापडल्या", search_schemes: "योजना शोधा...", category: "वर्ग", all_categories: "सर्व वर्ग", scheme_type: "योजनेचा प्रकार", all_types: "सर्व प्रकार", central_govt: "केंद्र सरकार", state_govt: "राज्य सरकार", gender: "लिंग", all_genders: "सर्व लिंग", male: "पुरुष", female: "स्त्री", transgender: "तृतीयपंथी", age: "वय", reset_filters: "फिल्टर रीसेट करा", no_schemes_found: "योजना सापडल्या नाहीत", adjust_filters: "फिल्टर बदला.", clear_filters: "सर्व फिल्टर काढा", view_details: "तपशील पहा →", previous: "मागील", next: "पुढील", filters: "फिल्टर",
    back_to_schemes: "योजनांवर परत", central_government: "केंद्र सरकार", state_government: "राज्य सरकार", last_updated: "शेवटचे अपडेट", share: "शेअर करा", save: "सेव्ह करा", saved: "सेव्ह केले", track_application: "अर्ज ट्रॅक करा", ready_to_apply: "अर्ज करण्यास तयार?", apply_on_website: "अधिकृत वेबसाइटवर अर्ज करा", key_benefits: "मुख्य फायदे", eligibility_criteria: "पात्रता निकष", required_documents: "आवश्यक कागदपत्रे", application_process: "अर्ज प्रक्रिया", faqs: "वारंवार विचारले जाणारे प्रश्न", rate_this_scheme: "या योजनेला रेट करा", average_rating: "सरासरी रेटिंग", compare: "तुलना करा",
    find_title: "तुमचे फायदे शोधा", find_subtitle: "काही प्रश्नांची उत्तरे द्या.", personal_details: "वैयक्तिक माहिती", location: "स्थान", financial_status: "आर्थिक स्थिती", what_is_age: "तुमचे वय किती?", select_gender: "लिंग निवडा", social_category: "सामाजिक वर्ग", select_category: "वर्ग निवडा", which_state: "तुम्ही कोणत्या राज्यात राहता?", annual_income: "वार्षिक कौटुंबिक उत्पन्न (₹)", income_hint: "वर्षाचे अंदाजित एकूण उत्पन्न", occupation_status: "व्यवसायाची स्थिती", select_occupation: "व्यवसाय निवडा", student: "विद्यार्थी", farmer: "शेतकरी", employed: "नोकरदार", self_employed: "स्वयंरोजगार / व्यवसाय", unemployed: "बेरोजगार", homemaker: "गृहिणी", retired: "निवृत्त", back: "मागे", continue_btn: "पुढे चला", show_results: "निकाल दाखवा", checking: "तपासत आहे...", restored_answers: "तुमची मागील उत्तरे पुनर्संचयित केली.", clear: "साफ करा", start_over: "पुन्हा सुरू करा",
    results_title: "तुमचे पात्रता निकाल", results_subtitle: "तुमच्या प्रोफाइलवर आधारित योजना.", high_match: "उच्च जुळणी", partial_match: "आंशिक जुळणी", match_label: "जुळणी", track_all: "सर्व ट्रॅक करा", tracking: "ट्रॅकिंग", missing: "उपलब्ध नाही", top_schemes: "शीर्ष योजना", personalized_dashboard: "वैयक्तिक डॅशबोर्ड",
    ai_page_title: "AI सहाय्यक", ai_page_subtitle: "AI सहाय्यकाशी चॅट करण्यासाठी लॉग इन करा.", login_to_chat: "चॅटसाठी लॉग इन करा", new_chat: "नवीन चॅट", how_can_help: "आज कशी मदत करू?", ask_anything: "सरकारी योजनांबद्दल काहीही विचारा.", ai_disclaimer: "AI चुका करू शकते. सरकारी पोर्टलवर खात्री करा.", send: "पाठवा", doc_checklist: "कागदपत्र चेकलिस्ट", generate_checklist: "चेकलिस्ट बनवा",
    tracker_title: "अर्ज ट्रॅकर", tracker_subtitle: "प्रत्येक अर्ज ट्रॅक करा", add_scheme: "योजना जोडा", not_started: "सुरू झाले नाही", applied: "अर्ज केला", under_review: "पुनरावलोकनात", approved: "मंजूर", rejected: "नाकारले", congrats_approved: "अभिनंदन! तुमच्या योजना मंजूर झाल्या.", no_tracked: "अजून कोणताही अर्ज ट्रॅक केलेला नाही", browse_to_track: "ट्रॅकिंग सुरू करण्यासाठी योजना पहा", update: "अपडेट", update_status: "अर्ज स्थिती अपडेट करा", status: "स्थिती", notes: "नोट्स (ऐच्छिक)", notes_placeholder: "संदर्भ क्रमांक, संपर्क...", remove: "काढा", deadline: "अंतिम मुदत", set_deadline: "मुदत ठरवा", deadline_approaching: "मुदत जवळ येत आहे!", share_benefits: "माझे फायदे शेअर करा",
    saved_title: "सेव्ह केलेल्या योजना", saved_subtitle: "तुमच्या आवडीच्या योजना ट्रॅक करा.", no_saved: "सेव्ह केलेल्या योजना नाहीत", no_saved_desc: "अजून योजना सेव्ह केलेल्या नाहीत.", export_pdf: "PDF डाउनलोड करा",
    compare_title: "योजनांची तुलना", compare_subtitle: "3 योजनांची तुलना करा.", select_schemes: "तुलनेसाठी योजना निवडा", compare_now: "आत्ता तुलना करा", clear_all: "सर्व काढा", no_compare: "तुलनेसाठी योजना निवडलेल्या नाहीत.", schemes_selected: "योजना निवडल्या", benefits: "फायदे", documents: "कागदपत्रे", income_limit: "उत्पन्न मर्यादा", age_limit: "वय मर्यादा", state_label: "राज्य",
    stories_title: "यशोगाथा", stories_subtitle: "सरकारी योजनांनी लोकांचे आयुष्य कसे बदलले.", submit_story: "तुमची गोष्ट सांगा", your_name: "तुमचे नाव", your_state: "तुमचे राज्य", scheme_name: "योजनेचे नाव", your_story: "तुमची गोष्ट", submit: "सबमिट करा", story_submitted: "धन्यवाद! तुमची गोष्ट सबमिट झाली.",
    checklist_title: "कागदपत्र चेकलिस्ट", checklist_subtitle: "योजना निवडा.", select_scheme: "योजना निवडा", your_checklist: "तुमची कागदपत्र चेकलिस्ट", copy_checklist: "चेकलिस्ट कॉपी करा", checklist_ready: "तुमची चेकलिस्ट तयार!", document_available: "हे कागदपत्र माझ्याकडे आहे", document_needed: "मिळवणे आवश्यक",
    loading: "लोड होत आहे...", error: "काहीतरी चूक झाली", sign_in: "साइन इन करा", sign_in_required: "साइन इन आवश्यक", language: "भाषा",
  },

  // Tamil
  ta: {
    nav_home: "முகப்பு", nav_browse: "திட்டங்கள்", nav_find: "தகுதி சோதனை", nav_ai: "AI உதவியாளர்", nav_about: "எங்களைப் பற்றி", nav_tracker: "கண்காணிப்பு", nav_saved: "சேமித்தவை", nav_profile: "சுயவிவரம்", nav_login: "உள்நுழைவு", nav_logout: "வெளியேறு", nav_compare: "ஒப்பிடு", nav_stories: "வெற்றிக் கதைகள்", nav_checklist: "ஆவண பட்டியல்",
    hero_title: "உங்களுக்கான அரசு திட்டங்களைக் கண்டறியுங்கள்", hero_subtitle: "இந்தியா முழுவதும் சமூக நலத் திட்டங்களைக் கண்டறியுங்கள்.", hero_cta: "என் தகுதியைச் சோதிக்கவும்", hero_browse: "அனைத்து திட்டங்களும்", hero_search_placeholder: "திட்டப் பெயர் அல்லது சொல் தேடுங்கள்...",
    stats_total: "மொத்த திட்டங்கள்", stats_central: "மத்திய அரசு திட்டங்கள்", stats_state: "மாநில அரசு திட்டங்கள்", stats_beneficiaries: "பயனாளிகள்",
    featured_title: "சிறப்பு திட்டங்கள்", featured_subtitle: "செயலில் உள்ள முக்கிய திட்டங்கள்.", view_all: "அனைத்தையும் காண்",
    smart_discovery: "ஸ்மார்ட் கண்டுபிடிப்பு", smart_discovery_desc: "உங்கள் சுயவிவரத்தின் படி திட்டங்களைக் கண்டறியுங்கள்.", ai_assistant: "AI உதவியாளர்", ai_assistant_desc: "எளிய மொழியில் கேள்விகள் கேளுங்கள்.", trusted_info: "நம்பகமான தகவல்", trusted_info_desc: "அரசு போர்டல்களிலிருந்து தகவல்.",
    schemes_near_me: "என் அருகிலுள்ள திட்டங்கள்", schemes_near_me_desc: "உங்கள் மாநிலத் திட்டங்களைக் கண்டறியுங்கள்", select_state: "உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
    success_stories_title: "வெற்றிக் கதைகள்", success_stories_subtitle: "திட்டங்கள் வாழ்க்கையை எப்படி மாற்றின.", read_more_stories: "மேலும் கதைகள் படிக்கவும்",
    browse_schemes: "திட்டங்கள் பார்க்க", schemes_found: "திட்டங்கள் கண்டறியப்பட்டன", search_schemes: "திட்டங்கள் தேடுங்கள்...", category: "வகை", all_categories: "அனைத்து வகைகள்", scheme_type: "திட்ட வகை", all_types: "அனைத்து வகைகள்", central_govt: "மத்திய அரசு", state_govt: "மாநில அரசு", gender: "பாலினம்", all_genders: "அனைத்து", male: "ஆண்", female: "பெண்", transgender: "திருநங்கை", age: "வயது", reset_filters: "வடிகட்டிகளை மீட்டமை", no_schemes_found: "திட்டங்கள் இல்லை", adjust_filters: "வடிகட்டிகளை மாற்றவும்.", clear_filters: "அனைத்தையும் அழி", view_details: "விவரங்கள் →", previous: "முந்தைய", next: "அடுத்த", filters: "வடிகட்டிகள்",
    back_to_schemes: "திட்டங்களுக்கு திரும்பு", central_government: "மத்திய அரசு", state_government: "மாநில அரசு", last_updated: "கடைசி புதுப்பிப்பு", share: "பகிர்", save: "சேமி", saved: "சேமிக்கப்பட்டது", track_application: "விண்ணப்பம் கண்காணி", ready_to_apply: "விண்ணப்பிக்க தயாரா?", apply_on_website: "அதிகாரப்பூர்வ இணையதளத்தில் விண்ணப்பிக்கவும்", key_benefits: "முக்கிய நன்மைகள்", eligibility_criteria: "தகுதி அளவுகோல்", required_documents: "தேவையான ஆவணங்கள்", application_process: "விண்ணப்ப செயல்முறை", faqs: "அடிக்கடி கேட்கப்படும் கேள்விகள்", rate_this_scheme: "இந்தத் திட்டத்தை மதிப்பிடுங்கள்", average_rating: "சராசரி மதிப்பீடு", compare: "ஒப்பிடு",
    find_title: "உங்கள் நன்மைகளைக் கண்டறியுங்கள்", find_subtitle: "சில கேள்விகளுக்கு பதிலளியுங்கள்.", personal_details: "தனிப்பட்ட விவரங்கள்", location: "இடம்", financial_status: "நிதி நிலை", what_is_age: "உங்கள் வயது என்ன?", select_gender: "பாலினம் தேர்வு", social_category: "சமூக வகை", select_category: "வகை தேர்வு", which_state: "எந்த மாநிலத்தில் வசிக்கிறீர்கள்?", annual_income: "ஆண்டு வருமானம் (₹)", income_hint: "ஆண்டு மொத்த வருமானம்", occupation_status: "தொழில் நிலை", select_occupation: "தொழில் தேர்வு", student: "மாணவர்", farmer: "விவசாயி", employed: "பணியாளர்", self_employed: "சுயதொழில்", unemployed: "வேலையில்லாதவர்", homemaker: "இல்லத்தரசி", retired: "ஓய்வு பெற்றவர்", back: "பின்", continue_btn: "தொடரவும்", show_results: "முடிவுகள் காட்டு", checking: "சோதிக்கிறது...", restored_answers: "முந்தைய பதில்கள் மீட்டமைக்கப்பட்டன.", clear: "அழி", start_over: "மீண்டும் தொடங்கு",
    results_title: "உங்கள் தகுதி முடிவுகள்", results_subtitle: "உங்கள் சுயவிவரத்தின் அடிப்படையில்.", high_match: "அதிக பொருத்தம்", partial_match: "பகுதி பொருத்தம்", match_label: "பொருத்தம்", track_all: "அனைத்தையும் கண்காணி", tracking: "கண்காணிப்பு", missing: "இல்லை", top_schemes: "சிறந்த திட்டங்கள்", personalized_dashboard: "தனிப்பட்ட டாஷ்போர்ட்",
    ai_page_title: "AI உதவியாளர்", ai_page_subtitle: "AI உதவியாளருடன் அரட்டையடிக்க உள்நுழையவும்.", login_to_chat: "அரட்டைக்கு உள்நுழையவும்", new_chat: "புதிய அரட்டை", how_can_help: "இன்று எப்படி உதவ முடியும்?", ask_anything: "அரசு திட்டங்கள் பற்றி கேளுங்கள்.", ai_disclaimer: "AI தவறுகள் செய்யலாம். அரசு போர்டல்களில் சரிபார்க்கவும்.", send: "அனுப்பு", doc_checklist: "ஆவண பட்டியல்", generate_checklist: "பட்டியல் உருவாக்கு",
    tracker_title: "விண்ணப்ப கண்காணிப்பு", tracker_subtitle: "ஒவ்வொரு விண்ணப்பத்தையும் கண்காணியுங்கள்", add_scheme: "திட்டம் சேர்", not_started: "தொடங்கவில்லை", applied: "விண்ணப்பித்தது", under_review: "மதிப்பாய்வில்", approved: "அங்கீகரிக்கப்பட்டது", rejected: "நிராகரிக்கப்பட்டது", congrats_approved: "வாழ்த்துக்கள்! உங்கள் திட்டங்கள் அங்கீகரிக்கப்பட்டன.", no_tracked: "இன்னும் கண்காணிக்கவில்லை", browse_to_track: "திட்டங்களைப் பாருங்கள்", update: "புதுப்பி", update_status: "நிலையைப் புதுப்பி", status: "நிலை", notes: "குறிப்புகள் (விருப்பம்)", notes_placeholder: "குறிப்பு எண், தொடர்பு...", remove: "நீக்கு", deadline: "காலக்கெடு", set_deadline: "காலக்கெடு அமை", deadline_approaching: "காலக்கெடு நெருங்குகிறது!", share_benefits: "என் நன்மைகள் பகிர்",
    saved_title: "சேமித்த திட்டங்கள்", saved_subtitle: "உங்கள் ஆர்வமுள்ள திட்டங்கள்.", no_saved: "சேமித்த திட்டங்கள் இல்லை", no_saved_desc: "இன்னும் திட்டங்கள் சேமிக்கவில்லை.", export_pdf: "PDF பதிவிறக்கு",
    compare_title: "திட்டங்களை ஒப்பிடு", compare_subtitle: "3 திட்டங்களை ஒப்பிடுங்கள்.", select_schemes: "ஒப்பிட திட்டங்கள் தேர்வு", compare_now: "இப்போது ஒப்பிடு", clear_all: "அனைத்தையும் நீக்கு", no_compare: "ஒப்பிட திட்டங்கள் தேர்வு செய்யவில்லை.", schemes_selected: "திட்டங்கள் தேர்வு", benefits: "நன்மைகள்", documents: "ஆவணங்கள்", income_limit: "வருமான வரம்பு", age_limit: "வயது வரம்பு", state_label: "மாநிலம்",
    stories_title: "வெற்றிக் கதைகள்", stories_subtitle: "அரசு திட்டங்கள் வாழ்க்கையை மாற்றின.", submit_story: "உங்கள் கதையைப் பகிருங்கள்", your_name: "உங்கள் பெயர்", your_state: "உங்கள் மாநிலம்", scheme_name: "திட்டப் பெயர்", your_story: "உங்கள் கதை", submit: "சமர்ப்பி", story_submitted: "நன்றி! உங்கள் கதை சமர்ப்பிக்கப்பட்டது.",
    checklist_title: "ஆவண பட்டியல்", checklist_subtitle: "திட்டம் தேர்வு செய்யுங்கள்.", select_scheme: "திட்டம் தேர்வு", your_checklist: "உங்கள் ஆவண பட்டியல்", copy_checklist: "பட்டியல் நகலெடு", checklist_ready: "பட்டியல் தயார்!", document_available: "இந்த ஆவணம் என்னிடம் உள்ளது", document_needed: "பெற வேண்டும்",
    loading: "ஏற்றுகிறது...", error: "ஏதோ தவறு", sign_in: "உள்நுழையவும்", sign_in_required: "உள்நுழைவு தேவை", language: "மொழி",
  },

  // Gujarati
  gu: {
    nav_home: "હોમ", nav_browse: "યોજનાઓ જુઓ", nav_find: "પાત્રતા તપાસો", nav_ai: "AI સહાયક", nav_about: "અમારા વિશે", nav_tracker: "ટ્રેકર", nav_saved: "સેવ કરેલ", nav_profile: "પ્રોફાઇલ", nav_login: "લૉગિન", nav_logout: "લૉગઆઉટ", nav_compare: "સરખામણી", nav_stories: "સફળતાની વાર્તાઓ", nav_checklist: "દસ્તાવેજ ચેકલિસ્ટ",
    hero_title: "તમારા માટે કઈ સરકારી યોજનાઓ છે તે શોધો", hero_subtitle: "ભારતભરમાં સામાજિક કલ્યાણ યોજનાઓ શોધો.", hero_cta: "મારી પાત્રતા તપાસો", hero_browse: "બધી યોજનાઓ જુઓ", hero_search_placeholder: "યોજનાનું નામ અથવા કીવર્ડ શોધો...",
    stats_total: "કુલ યોજનાઓ", stats_central: "કેન્દ્ર સરકારની યોજનાઓ", stats_state: "રાજ્ય સરકારની યોજનાઓ", stats_beneficiaries: "લાભાર્થીઓ",
    featured_title: "વિશેષ યોજનાઓ", featured_subtitle: "સક્રિય અસરકારક યોજનાઓ.", view_all: "બધી યોજનાઓ જુઓ",
    smart_discovery: "સ્માર્ટ શોધ", smart_discovery_desc: "તમારી પ્રોફાઇલ પ્રમાણે યોજનાઓ શોધો.", ai_assistant: "AI સહાયક", ai_assistant_desc: "સરળ ભાષામાં પ્રશ્નો પૂછો.", trusted_info: "વિશ્વસનીય માહિતી", trusted_info_desc: "સરકારી પોર્ટલ્સમાંથી માહિતી.",
    schemes_near_me: "મારી નજીકની યોજનાઓ", schemes_near_me_desc: "તમારા રાજ્યની યોજનાઓ શોધો", select_state: "તમારું રાજ્ય પસંદ કરો",
    success_stories_title: "સફળતાની વાર્તાઓ", success_stories_subtitle: "યોજનાઓએ જીવન કેવી રીતે બદલ્યું.", read_more_stories: "વધુ વાર્તાઓ વાંચો",
    browse_schemes: "યોજનાઓ જુઓ", schemes_found: "યોજનાઓ મળી", search_schemes: "યોજનાઓ શોધો...", category: "શ્રેણી", all_categories: "બધી શ્રેણીઓ", scheme_type: "યોજનાનો પ્રકાર", all_types: "બધા પ્રકાર", central_govt: "કેન્દ્ર સરકાર", state_govt: "રાજ્ય સરકાર", gender: "લિંગ", all_genders: "બધા લિંગ", male: "પુરુષ", female: "સ્ત્રી", transgender: "ટ્રાન્સજેન્ડર", age: "ઉંમર", reset_filters: "ફિલ્ટર રીસેટ કરો", no_schemes_found: "કોઈ યોજના મળી નથી", adjust_filters: "ફિલ્ટર બદલો.", clear_filters: "બધા ફિલ્ટર કાઢો", view_details: "વિગતો જુઓ →", previous: "પાછલું", next: "આગળ", filters: "ફિલ્ટર",
    back_to_schemes: "યોજનાઓ પર પાછા", central_government: "કેન્દ્ર સરકાર", state_government: "રાજ્ય સરકાર", last_updated: "છેલ્લું અપડેટ", share: "શેર કરો", save: "સેવ કરો", saved: "સેવ કર્યું", track_application: "અરજી ટ્રેક કરો", ready_to_apply: "અરજી કરવા તૈયાર?", apply_on_website: "અધિકૃત વેબસાઇટ પર અરજી કરો", key_benefits: "મુખ્ય ફાયદા", eligibility_criteria: "પાત્રતા માપદંડ", required_documents: "જરૂરી દસ્તાવેજો", application_process: "અરજી પ્રક્રિયા", faqs: "વારંવાર પૂછાતા પ્રશ્નો", rate_this_scheme: "આ યોજનાને રેટ કરો", average_rating: "સરેરાશ રેટિંગ", compare: "સરખામણી",
    find_title: "તમારા ફાયદા શોધો", find_subtitle: "થોડા પ્રશ્નોના જવાબ આપો.", personal_details: "વ્યક્તિગત વિગતો", location: "સ્થાન", financial_status: "આર્થિક સ્થિતિ", what_is_age: "તમારી ઉંમર શું છે?", select_gender: "લિંગ પસંદ કરો", social_category: "સામાજિક શ્રેણી", select_category: "શ્રેણી પસંદ કરો", which_state: "તમે કયા રાજ્યમાં રહો છો?", annual_income: "વાર્ષિક કૌટુંબિક આવક (₹)", income_hint: "વર્ષની અંદાજિત કુલ આવક", occupation_status: "વ્યવસાયની સ્થિતિ", select_occupation: "વ્યવસાય પસંદ કરો", student: "વિદ્યાર્થી", farmer: "ખેડૂત", employed: "નોકરિયાત", self_employed: "સ્વરોજગાર / વ્યવસાય", unemployed: "બેરોજગાર", homemaker: "ગૃહિણી", retired: "નિવૃત્ત", back: "પાછળ", continue_btn: "આગળ વધો", show_results: "પરિણામ બતાવો", checking: "તપાસી રહ્યા છીએ...", restored_answers: "તમારા પાછલા જવાબો પુનઃસ્થાપિત કર્યા.", clear: "સાફ કરો", start_over: "ફરીથી શરૂ કરો",
    results_title: "તમારા પાત્રતા પરિણામો", results_subtitle: "તમારી પ્રોફાઇલ પર આધારિત.", high_match: "ઉચ્ચ મેળ", partial_match: "આંશિક મેળ", match_label: "મેળ", track_all: "બધા ટ્રેક કરો", tracking: "ટ્રેકિંગ", missing: "ઉપલબ્ધ નથી", top_schemes: "ટોચની યોજનાઓ", personalized_dashboard: "વ્યક્તિગત ડેશબોર્ડ",
    ai_page_title: "AI સહાયક", ai_page_subtitle: "AI સાથે ચેટ કરવા લૉગિન કરો.", login_to_chat: "ચેટ માટે લૉગિન", new_chat: "નવી ચેટ", how_can_help: "આજે કેવી રીતે મદદ કરું?", ask_anything: "સરકારી યોજનાઓ વિશે પૂછો.", ai_disclaimer: "AI ભૂલો કરી શકે છે. સરકારી પોર્ટલ પર ચકાસો.", send: "મોકલો", doc_checklist: "દસ્તાવેજ ચેકલિસ્ટ", generate_checklist: "ચેકલિસ્ટ બનાવો",
    tracker_title: "અરજી ટ્રેકર", tracker_subtitle: "દરેક અરજી ટ્રેક કરો", add_scheme: "યોજના ઉમેરો", not_started: "શરૂ નથી થયું", applied: "અરજી કરી", under_review: "સમીક્ષામાં", approved: "મંજૂર", rejected: "નામંજૂર", congrats_approved: "અભિનંદન! તમારી યોજનાઓ મંજૂર થઈ.", no_tracked: "હજુ કોઈ અરજી ટ્રેક નથી", browse_to_track: "ટ્રેકિંગ શરૂ કરવા યોજનાઓ જુઓ", update: "અપડેટ", update_status: "સ્થિતિ અપડેટ કરો", status: "સ્થિતિ", notes: "નોંધ (વૈકલ્પિક)", notes_placeholder: "સંદર્ભ નંબર, સંપર્ક...", remove: "દૂર કરો", deadline: "સમયમર્યાદા", set_deadline: "સમયમર્યાદા સેટ કરો", deadline_approaching: "સમયમર્યાદા નજીક!", share_benefits: "મારા ફાયદા શેર કરો",
    saved_title: "સેવ કરેલ યોજનાઓ", saved_subtitle: "તમારી રુચિની યોજનાઓ.", no_saved: "સેવ કરેલ યોજનાઓ નથી", no_saved_desc: "હજુ યોજનાઓ સેવ નથી કરી.", export_pdf: "PDF ડાઉનલોડ કરો",
    compare_title: "યોજનાઓની સરખામણી", compare_subtitle: "3 યોજનાઓની સરખામણી.", select_schemes: "સરખામણી માટે પસંદ કરો", compare_now: "હમણાં સરખામણી", clear_all: "બધા કાઢો", no_compare: "સરખામણી માટે પસંદ નથી.", schemes_selected: "યોજનાઓ પસંદ", benefits: "ફાયદા", documents: "દસ્તાવેજો", income_limit: "આવક મર્યાદા", age_limit: "ઉંમર મર્યાદા", state_label: "રાજ્ય",
    stories_title: "સફળતાની વાર્તાઓ", stories_subtitle: "સરકારી યોજનાઓએ જીવન બદલ્યા.", submit_story: "તમારી વાર્તા શેર કરો", your_name: "તમારું નામ", your_state: "તમારું રાજ્ય", scheme_name: "યોજનાનું નામ", your_story: "તમારી વાર્તા", submit: "સબમિટ", story_submitted: "આભાર! તમારી વાર્તા સબમિટ થઈ.",
    checklist_title: "દસ્તાવેજ ચેકલિસ્ટ", checklist_subtitle: "યોજના પસંદ કરો.", select_scheme: "યોજના પસંદ કરો", your_checklist: "તમારી ચેકલિસ્ટ", copy_checklist: "ચેકલિસ્ટ કૉપિ", checklist_ready: "ચેકલિસ્ટ તૈયાર!", document_available: "આ દસ્તાવેજ મારી પાસે છે", document_needed: "મેળવવાની જરૂર",
    loading: "લોડ થઈ રહ્યું છે...", error: "કંઈક ખોટું થયું", sign_in: "સાઇન ઇન", sign_in_required: "સાઇન ઇન જરૂરી", language: "ભાષા",
  },

  // Kannada
  kn: {
    nav_home: "ಮುಖಪುಟ", nav_browse: "ಯೋಜನೆಗಳು", nav_find: "ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ", nav_ai: "AI ಸಹಾಯಕ", nav_about: "ನಮ್ಮ ಬಗ್ಗೆ", nav_tracker: "ಟ್ರ್ಯಾಕರ್", nav_saved: "ಉಳಿಸಿದವು", nav_profile: "ಪ್ರೊಫೈಲ್", nav_login: "ಲಾಗಿನ್", nav_logout: "ಲಾಗೌಟ್", nav_compare: "ಹೋಲಿಸಿ", nav_stories: "ಯಶೋಗಾಥೆ", nav_checklist: "ದಾಖಲೆ ಪಟ್ಟಿ",
    hero_title: "ನಿಮಗೆ ಯಾವ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿವೆ ಎಂದು ತಿಳಿಯಿರಿ", hero_subtitle: "ಭಾರತಾದ್ಯಂತ ಸಮಾಜ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ.", hero_cta: "ನನ್ನ ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ", hero_browse: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು", hero_search_placeholder: "ಯೋಜನೆ ಹೆಸರು ಅಥವಾ ಕೀವರ್ಡ್ ಹುಡುಕಿ...",
    stats_total: "ಒಟ್ಟು ಯೋಜನೆಗಳು", stats_central: "ಕೇಂದ್ರ ಸರ್ಕಾರ ಯೋಜನೆಗಳು", stats_state: "ರಾಜ್ಯ ಸರ್ಕಾರ ಯೋಜನೆಗಳು", stats_beneficiaries: "ಫಲಾನುಭಕ್ತರು",
    featured_title: "ವಿಶೇಷ ಯೋಜನೆಗಳು", featured_subtitle: "ಸಕ್ರಿಯ ಪ್ರಮುಖ ಯೋಜನೆಗಳು.", view_all: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು ನೋಡಿ",
    smart_discovery: "ಸ್ಮಾರ್ಟ್ ಅನ್ವೇಷಣೆ", smart_discovery_desc: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಪ್ರಕಾರ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ.", ai_assistant: "AI ಸಹಾಯಕ", ai_assistant_desc: "ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.", trusted_info: "ವಿಶ್ವಾಸಾರ್ಹ ಮಾಹಿತಿ", trusted_info_desc: "ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳಿಂದ ಮಾಹಿತಿ.",
    schemes_near_me: "ನನ್ನ ಹತ್ತಿರದ ಯೋಜನೆಗಳು", schemes_near_me_desc: "ನಿಮ್ಮ ರಾಜ್ಯದ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ", select_state: "ನಿಮ್ಮ ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ",
    success_stories_title: "ಯಶೋಗಾಥೆ", success_stories_subtitle: "ಯೋಜನೆಗಳು ಜೀವನವನ್ನು ಹೇಗೆ ಬದಲಿಸಿದವು.", read_more_stories: "ಇನ್ನಷ್ಟು ಕಥೆಗಳನ್ನು ಓದಿ",
    browse_schemes: "ಯೋಜನೆಗಳು ನೋಡಿ", schemes_found: "ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿವೆ", search_schemes: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ...", category: "ವಿಭಾಗ", all_categories: "ಎಲ್ಲಾ ವಿಭಾಗಗಳು", scheme_type: "ಯೋಜನೆ ಪ್ರಕಾರ", all_types: "ಎಲ್ಲಾ ಪ್ರಕಾರಗಳು", central_govt: "ಕೇಂದ್ರ ಸರ್ಕಾರ", state_govt: "ರಾಜ್ಯ ಸರ್ಕಾರ", gender: "ಲಿಂಗ", all_genders: "ಎಲ್ಲಾ ಲಿಂಗ", male: "ಪುರುಷ", female: "ಮಹಿಳೆ", transgender: "ಟ್ರಾನ್ಸ್‌ಜೆಂಡರ್", age: "ವಯಸ್ಸು", reset_filters: "ಫಿಲ್ಟರ್ ರೀಸೆಟ್", no_schemes_found: "ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ", adjust_filters: "ಫಿಲ್ಟರ್ ಬದಲಿಸಿ.", clear_filters: "ಎಲ್ಲಾ ಫಿಲ್ಟರ್ ತೆಗೆಯಿರಿ", view_details: "ವಿವರಗಳು →", previous: "ಹಿಂದಿನ", next: "ಮುಂದಿನ", filters: "ಫಿಲ್ಟರ್",
    back_to_schemes: "ಯೋಜನೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ", central_government: "ಕೇಂದ್ರ ಸರ್ಕಾರ", state_government: "ರಾಜ್ಯ ಸರ್ಕಾರ", last_updated: "ಕೊನೆಯ ನವೀಕರಣ", share: "ಹಂಚಿಕೊಳ್ಳಿ", save: "ಉಳಿಸಿ", saved: "ಉಳಿಸಲಾಗಿದೆ", track_application: "ಅರ್ಜಿ ಟ್ರ್ಯಾಕ್", ready_to_apply: "ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಸಿದ್ಧ?", apply_on_website: "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ", key_benefits: "ಪ್ರಮುಖ ಪ್ರಯೋಜನಗಳು", eligibility_criteria: "ಅರ್ಹತೆ ಮಾನದಂಡ", required_documents: "ಅಗತ್ಯ ದಾಖಲೆಗಳು", application_process: "ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ", faqs: "ಆಗಾಗ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು", rate_this_scheme: "ಈ ಯೋಜನೆಯನ್ನು ರೇಟ್ ಮಾಡಿ", average_rating: "ಸರಾಸರಿ ರೇಟಿಂಗ್", compare: "ಹೋಲಿಸಿ",
    find_title: "ನಿಮ್ಮ ಪ್ರಯೋಜನಗಳನ್ನು ಹುಡುಕಿ", find_subtitle: "ಕೆಲವು ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.", personal_details: "ವೈಯಕ್ತಿಕ ವಿವರ", location: "ಸ್ಥಳ", financial_status: "ಆರ್ಥಿಕ ಸ್ಥಿತಿ", what_is_age: "ನಿಮ್ಮ ವಯಸ್ಸು ಎಷ್ಟು?", select_gender: "ಲಿಂಗ ಆಯ್ಕೆ", social_category: "ಸಾಮಾಜಿಕ ವರ್ಗ", select_category: "ವರ್ಗ ಆಯ್ಕೆ", which_state: "ಯಾವ ರಾಜ್ಯದಲ್ಲಿ ವಾಸ?", annual_income: "ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ (₹)", income_hint: "ವಾರ್ಷಿಕ ಒಟ್ಟು ಆದಾಯ", occupation_status: "ಉದ್ಯೋಗ ಸ್ಥಿತಿ", select_occupation: "ಉದ್ಯೋಗ ಆಯ್ಕೆ", student: "ವಿದ್ಯಾರ್ಥಿ", farmer: "ರೈತ", employed: "ಉದ್ಯೋಗಿ", self_employed: "ಸ್ವ-ಉದ್ಯೋಗ / ವ್ಯಾಪಾರ", unemployed: "ನಿರುದ್ಯೋಗಿ", homemaker: "ಗೃಹಿಣಿ", retired: "ನಿವೃತ್ತ", back: "ಹಿಂದೆ", continue_btn: "ಮುಂದುವರಿಸಿ", show_results: "ಫಲಿತಾಂಶ ತೋರಿಸಿ", checking: "ಪರಿಶೀಲಿಸುತ್ತಿದೆ...", restored_answers: "ನಿಮ್ಮ ಹಿಂದಿನ ಉತ್ತರಗಳನ್ನು ಮರುಸ್ಥಾಪಿಸಲಾಗಿದೆ.", clear: "ಅಳಿಸಿ", start_over: "ಮತ್ತೆ ಆರಂಭಿಸಿ",
    results_title: "ನಿಮ್ಮ ಅರ್ಹತೆ ಫಲಿತಾಂಶ", results_subtitle: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಆಧಾರದ ಮೇಲೆ.", high_match: "ಹೆಚ್ಚಿನ ಹೊಂದಾಣಿಕೆ", partial_match: "ಭಾಗಶಃ ಹೊಂದಾಣಿಕೆ", match_label: "ಹೊಂದಾಣಿಕೆ", track_all: "ಎಲ್ಲವನ್ನೂ ಟ್ರ್ಯಾಕ್", tracking: "ಟ್ರ್ಯಾಕಿಂಗ್", missing: "ಇಲ್ಲ", top_schemes: "ಅಗ್ರ ಯೋಜನೆಗಳು", personalized_dashboard: "ವೈಯಕ್ತಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    ai_page_title: "AI ಸಹಾಯಕ", ai_page_subtitle: "AI ಸಹಾಯಕರೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಲು ಲಾಗಿನ್ ಆಗಿ.", login_to_chat: "ಚಾಟ್‌ಗಾಗಿ ಲಾಗಿನ್", new_chat: "ಹೊಸ ಚಾಟ್", how_can_help: "ಇಂದು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?", ask_anything: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ.", ai_disclaimer: "AI ತಪ್ಪುಗಳನ್ನು ಮಾಡಬಹುದು. ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.", send: "ಕಳುಹಿಸಿ", doc_checklist: "ದಾಖಲೆ ಪಟ್ಟಿ", generate_checklist: "ಪಟ್ಟಿ ರಚಿಸಿ",
    tracker_title: "ಅರ್ಜಿ ಟ್ರ್ಯಾಕರ್", tracker_subtitle: "ಪ್ರತಿ ಅರ್ಜಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ", add_scheme: "ಯೋಜನೆ ಸೇರಿಸಿ", not_started: "ಆರಂಭವಾಗಿಲ್ಲ", applied: "ಅರ್ಜಿ ಸಲ್ಲಿಸಲಾಗಿದೆ", under_review: "ಪರಿಶೀಲನೆಯಲ್ಲಿ", approved: "ಅನುಮೋದಿತ", rejected: "ತಿರಸ್ಕೃತ", congrats_approved: "ಅಭಿನಂದನೆ! ನಿಮ್ಮ ಯೋಜನೆಗಳು ಅನುಮೋದಿತ.", no_tracked: "ಇನ್ನೂ ಟ್ರ್ಯಾಕ್ ಮಾಡಿಲ್ಲ", browse_to_track: "ಟ್ರ್ಯಾಕಿಂಗ್ ಆರಂಭಿಸಲು ಯೋಜನೆಗಳನ್ನು ನೋಡಿ", update: "ನವೀಕರಿಸಿ", update_status: "ಸ್ಥಿತಿ ನವೀಕರಿಸಿ", status: "ಸ್ಥಿತಿ", notes: "ಟಿಪ್ಪಣಿ (ಐಚ್ಛಿಕ)", notes_placeholder: "ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ, ಸಂಪರ್ಕ...", remove: "ತೆಗೆಯಿರಿ", deadline: "ಅಂತಿಮ ದಿನಾಂಕ", set_deadline: "ಅಂತಿಮ ದಿನಾಂಕ ಹೊಂದಿಸಿ", deadline_approaching: "ಅಂತಿಮ ದಿನಾಂಕ ಸಮೀಪಿಸುತ್ತಿದೆ!", share_benefits: "ನನ್ನ ಪ್ರಯೋಜನಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
    saved_title: "ಉಳಿಸಿದ ಯೋಜನೆಗಳು", saved_subtitle: "ನಿಮ್ಮ ಆಸಕ್ತಿಯ ಯೋಜನೆಗಳು.", no_saved: "ಉಳಿಸಿದ ಯೋಜನೆಗಳಿಲ್ಲ", no_saved_desc: "ಇನ್ನೂ ಯೋಜನೆಗಳನ್ನು ಉಳಿಸಿಲ್ಲ.", export_pdf: "PDF ಡೌನ್‌ಲೋಡ್",
    compare_title: "ಯೋಜನೆಗಳ ಹೋಲಿಕೆ", compare_subtitle: "3 ಯೋಜನೆಗಳನ್ನು ಹೋಲಿಸಿ.", select_schemes: "ಹೋಲಿಕೆಗೆ ಆಯ್ಕೆ", compare_now: "ಈಗ ಹೋಲಿಸಿ", clear_all: "ಎಲ್ಲಾ ತೆಗೆಯಿರಿ", no_compare: "ಹೋಲಿಕೆಗೆ ಯೋಜನೆಗಳು ಆಯ್ಕೆಯಾಗಿಲ್ಲ.", schemes_selected: "ಯೋಜನೆಗಳು ಆಯ್ಕೆ", benefits: "ಪ್ರಯೋಜನಗಳು", documents: "ದಾಖಲೆಗಳು", income_limit: "ಆದಾಯ ಮಿತಿ", age_limit: "ವಯಸ್ಸಿನ ಮಿತಿ", state_label: "ರಾಜ್ಯ",
    stories_title: "ಯಶೋಗಾಥೆ", stories_subtitle: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಜೀವನ ಬದಲಿಸಿದವು.", submit_story: "ನಿಮ್ಮ ಕಥೆ ಹಂಚಿಕೊಳ್ಳಿ", your_name: "ನಿಮ್ಮ ಹೆಸರು", your_state: "ನಿಮ್ಮ ರಾಜ್ಯ", scheme_name: "ಯೋಜನೆ ಹೆಸರು", your_story: "ನಿಮ್ಮ ಕಥೆ", submit: "ಸಲ್ಲಿಸಿ", story_submitted: "ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಕಥೆ ಸಲ್ಲಿಕೆಯಾಗಿದೆ.",
    checklist_title: "ದಾಖಲೆ ಪಟ್ಟಿ ಜನರೇಟರ್", checklist_subtitle: "ಯೋಜನೆ ಆಯ್ಕೆಮಾಡಿ.", select_scheme: "ಯೋಜನೆ ಆಯ್ಕೆ", your_checklist: "ನಿಮ್ಮ ದಾಖಲೆ ಪಟ್ಟಿ", copy_checklist: "ಪಟ್ಟಿ ನಕಲಿಸಿ", checklist_ready: "ನಿಮ್ಮ ಪಟ್ಟಿ ಸಿದ್ಧ!", document_available: "ಈ ದಾಖಲೆ ನನ್ನ ಬಳಿ ಇದೆ", document_needed: "ಪಡೆಯಬೇಕಾಗಿದೆ",
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...", error: "ಏನೋ ತಪ್ಪಾಗಿದೆ", sign_in: "ಸೈನ್ ಇನ್", sign_in_required: "ಸೈನ್ ಇನ್ ಅಗತ್ಯ", language: "ಭಾಷೆ",
  },

  // Malayalam
  ml: {
    nav_home: "ഹോം", nav_browse: "പദ്ധതികൾ", nav_find: "യോഗ്യത പരിശോധിക്കുക", nav_ai: "AI സഹായി", nav_about: "ഞങ്ങളെ കുറിച്ച്", nav_tracker: "ട്രാക്കർ", nav_saved: "സേവ് ചെയ്തവ", nav_profile: "പ്രൊഫൈൽ", nav_login: "ലോഗിൻ", nav_logout: "ലോഗൗട്ട്", nav_compare: "താരതമ്യം", nav_stories: "വിജയ കഥകൾ", nav_checklist: "രേഖ ചെക്ക്‌ലിസ്റ്റ്",
    hero_title: "നിങ്ങൾക്കുള്ള സർക്കാർ പദ്ധതികൾ കണ്ടെത്തുക", hero_subtitle: "ഇന്ത്യയിലെ ക്ഷേമ പദ്ധതികൾ കണ്ടെത്തുക.", hero_cta: "എന്റെ യോഗ്യത പരിശോധിക്കുക", hero_browse: "എല്ലാ പദ്ധതികളും", hero_search_placeholder: "പദ്ധതി പേര് അല്ലെങ്കിൽ കീവേഡ് തിരയുക...",
    stats_total: "ആകെ പദ്ധതികൾ", stats_central: "കേന്ദ്ര സർക്കാർ പദ്ധതികൾ", stats_state: "സംസ്ഥാന സർക്കാർ പദ്ധതികൾ", stats_beneficiaries: "ഗുണഭോക്താക്കൾ",
    featured_title: "പ്രമുഖ പദ്ധതികൾ", featured_subtitle: "സജീവമായ പ്രധാന പദ്ധതികൾ.", view_all: "എല്ലാം കാണുക",
    smart_discovery: "സ്മാർട്ട് കണ്ടെത്തൽ", smart_discovery_desc: "നിങ്ങളുടെ പ്രൊഫൈൽ അനുസരിച്ച് പദ്ധതികൾ.", ai_assistant: "AI സഹായി", ai_assistant_desc: "ലളിതമായ ഭാഷയിൽ ചോദ്യങ്ങൾ ചോദിക്കുക.", trusted_info: "വിശ്വസനീയ വിവരം", trusted_info_desc: "സർക്കാർ പോർട്ടലുകളിൽ നിന്നുള്ള വിവരങ്ങൾ.",
    schemes_near_me: "എന്റെ അടുത്തുള്ള പദ്ധതികൾ", schemes_near_me_desc: "നിങ്ങളുടെ സംസ്ഥാന പദ്ധതികൾ കണ്ടെത്തുക", select_state: "നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
    success_stories_title: "വിജയ കഥകൾ", success_stories_subtitle: "പദ്ധതികൾ ജീവിതം മാറ്റി.", read_more_stories: "കൂടുതൽ കഥകൾ വായിക്കുക",
    browse_schemes: "പദ്ധതികൾ കാണുക", schemes_found: "പദ്ധതികൾ കണ്ടെത്തി", search_schemes: "പദ്ധതികൾ തിരയുക...", category: "വിഭാഗം", all_categories: "എല്ലാ വിഭാഗങ്ങളും", scheme_type: "പദ്ധതി തരം", all_types: "എല്ലാ തരങ്ങളും", central_govt: "കേന്ദ്ര സർക്കാർ", state_govt: "സംസ്ഥാന സർക്കാർ", gender: "ലിംഗം", all_genders: "എല്ലാ ലിംഗങ്ങളും", male: "പുരുഷൻ", female: "സ്ത്രീ", transgender: "ട്രാൻസ്ജെൻഡർ", age: "പ്രായം", reset_filters: "ഫിൽട്ടർ റീസെറ്റ്", no_schemes_found: "പദ്ധതികൾ കണ്ടെത്തിയില്ല", adjust_filters: "ഫിൽട്ടർ മാറ്റുക.", clear_filters: "എല്ലാ ഫിൽട്ടറുകളും നീക്കുക", view_details: "വിശദാംശങ്ങൾ →", previous: "മുമ്പത്തെ", next: "അടുത്തത്", filters: "ഫിൽട്ടറുകൾ",
    back_to_schemes: "പദ്ധതികളിലേക്ക് മടങ്ങുക", central_government: "കേന്ദ്ര സർക്കാർ", state_government: "സംസ്ഥാന സർക്കാർ", last_updated: "അവസാന അപ്ഡേറ്റ്", share: "പങ്കിടുക", save: "സേവ് ചെയ്യുക", saved: "സേവ് ചെയ്തു", track_application: "അപേക്ഷ ട്രാക്ക് ചെയ്യുക", ready_to_apply: "അപേക്ഷിക്കാൻ തയ്യാറാണോ?", apply_on_website: "ഔദ്യോഗിക വെബ്‌സൈറ്റിൽ അപേക്ഷിക്കുക", key_benefits: "പ്രധാന ആനുകൂല്യങ്ങൾ", eligibility_criteria: "യോഗ്യതാ മാനദണ്ഡം", required_documents: "ആവശ്യമായ രേഖകൾ", application_process: "അപേക്ഷ പ്രക്രിയ", faqs: "പതിവ് ചോദ്യങ്ങൾ", rate_this_scheme: "ഈ പദ്ധതി റേറ്റ് ചെയ്യുക", average_rating: "ശരാശരി റേറ്റിംഗ്", compare: "താരതമ്യം",
    find_title: "നിങ്ങളുടെ ആനുകൂല്യങ്ങൾ കണ്ടെത്തുക", find_subtitle: "ചില ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകുക.", personal_details: "വ്യക്തിഗത വിശദാംശങ്ങൾ", location: "സ്ഥലം", financial_status: "സാമ്പത്തിക നില", what_is_age: "നിങ്ങളുടെ പ്രായം എത്ര?", select_gender: "ലിംഗം തിരഞ്ഞെടുക്കുക", social_category: "സാമൂഹിക വിഭാഗം", select_category: "വിഭാഗം തിരഞ്ഞെടുക്കുക", which_state: "ഏത് സംസ്ഥാനത്തിലാണ് താമസം?", annual_income: "വാർഷിക കുടുംബ വരുമാനം (₹)", income_hint: "വാർഷിക ആകെ വരുമാനം", occupation_status: "തൊഴിൽ നില", select_occupation: "തൊഴിൽ തിരഞ്ഞെടുക്കുക", student: "വിദ്യാർത്ഥി", farmer: "കർഷകൻ", employed: "ജോലിക്കാരൻ", self_employed: "സ്വയം തൊഴിൽ", unemployed: "തൊഴിലില്ലാത്തയാൾ", homemaker: "വീട്ടമ്മ", retired: "വിരമിച്ചയാൾ", back: "പിന്നിലേക്ക്", continue_btn: "തുടരുക", show_results: "ഫലങ്ങൾ കാണിക്കുക", checking: "പരിശോധിക്കുന്നു...", restored_answers: "മുമ്പത്തെ ഉത്തരങ്ങൾ പുനഃസ്ഥാപിച്ചു.", clear: "മായ്ക്കുക", start_over: "വീണ്ടും തുടങ്ങുക",
    results_title: "നിങ്ങളുടെ യോഗ്യതാ ഫലങ്ങൾ", results_subtitle: "നിങ്ങളുടെ പ്രൊഫൈലിനെ അടിസ്ഥാനമാക്കി.", high_match: "ഉയർന്ന പൊരുത്തം", partial_match: "ഭാഗിക പൊരുത്തം", match_label: "പൊരുത്തം", track_all: "എല്ലാം ട്രാക്ക് ചെയ്യുക", tracking: "ട്രാക്കിംഗ്", missing: "ഇല്ല", top_schemes: "മികച്ച പദ്ധതികൾ", personalized_dashboard: "വ്യക്തിഗത ഡാഷ്‌ബോർഡ്",
    ai_page_title: "AI സഹായി", ai_page_subtitle: "AI സഹായിയുമായി ചാറ്റ് ചെയ്യാൻ ലോഗിൻ ചെയ്യുക.", login_to_chat: "ചാറ്റിന് ലോഗിൻ", new_chat: "പുതിയ ചാറ്റ്", how_can_help: "ഇന്ന് എങ്ങനെ സഹായിക്കാം?", ask_anything: "സർക്കാർ പദ്ധതികളെ കുറിച്ച് ചോദിക്കൂ.", ai_disclaimer: "AI തെറ്റുകൾ ചെയ്യാം. സർക്കാർ പോർട്ടലിൽ പരിശോധിക്കുക.", send: "അയയ്ക്കുക", doc_checklist: "രേഖ ചെക്ക്‌ലിസ്റ്റ്", generate_checklist: "ചെക്ക്‌ലിസ്റ്റ് ഉണ്ടാക്കുക",
    tracker_title: "അപേക്ഷ ട്രാക്കർ", tracker_subtitle: "ഓരോ അപേക്ഷയും ട്രാക്ക് ചെയ്യുക", add_scheme: "പദ്ധതി ചേർക്കുക", not_started: "ആരംഭിച്ചിട്ടില്ല", applied: "അപേക്ഷിച്ചു", under_review: "പരിശോധനയിൽ", approved: "അംഗീകരിച്ചു", rejected: "നിരസിച്ചു", congrats_approved: "അഭിനന്ദനങ്ങൾ! നിങ്ങളുടെ പദ്ധതികൾ അംഗീകരിച്ചു.", no_tracked: "ഇതുവരെ ട്രാക്ക് ചെയ്തിട്ടില്ല", browse_to_track: "ട്രാക്കിംഗ് ആരംഭിക്കാൻ പദ്ധതികൾ കാണുക", update: "അപ്ഡേറ്റ്", update_status: "നില അപ്ഡേറ്റ് ചെയ്യുക", status: "നില", notes: "കുറിപ്പുകൾ (ഐച്ഛികം)", notes_placeholder: "റഫറൻസ് നമ്പർ, ബന്ധപ്പെടുക...", remove: "നീക്കം ചെയ്യുക", deadline: "അവസാന തീയതി", set_deadline: "അവസാന തീയതി സെറ്റ് ചെയ്യുക", deadline_approaching: "അവസാന തീയതി അടുക്കുന്നു!", share_benefits: "എന്റെ ആനുകൂല്യങ്ങൾ പങ്കിടുക",
    saved_title: "സേവ് ചെയ്ത പദ്ധതികൾ", saved_subtitle: "നിങ്ങളുടെ താൽപര്യമുള്ള പദ്ധതികൾ.", no_saved: "സേവ് ചെയ്ത പദ്ധതികളില്ല", no_saved_desc: "ഇതുവരെ പദ്ധതികൾ സേവ് ചെയ്തിട്ടില്ല.", export_pdf: "PDF ഡൗൺലോഡ്",
    compare_title: "പദ്ധതികൾ താരതമ്യം", compare_subtitle: "3 പദ്ധതികൾ താരതമ്യം ചെയ്യുക.", select_schemes: "താരതമ്യത്തിന് തിരഞ്ഞെടുക്കുക", compare_now: "ഇപ്പോൾ താരതമ്യം ചെയ്യുക", clear_all: "എല്ലാം നീക്കുക", no_compare: "താരതമ്യത്തിന് പദ്ധതികൾ തിരഞ്ഞെടുത്തിട്ടില്ല.", schemes_selected: "പദ്ധതികൾ തിരഞ്ഞെടുത്തു", benefits: "ആനുകൂല്യങ്ങൾ", documents: "രേഖകൾ", income_limit: "വരുമാന പരിധി", age_limit: "പ്രായ പരിധി", state_label: "സംസ്ഥാനം",
    stories_title: "വിജയ കഥകൾ", stories_subtitle: "സർക്കാർ പദ്ധതികൾ ജീവിതം മാറ്റി.", submit_story: "നിങ്ങളുടെ കഥ പങ്കിടുക", your_name: "നിങ്ങളുടെ പേര്", your_state: "നിങ്ങളുടെ സംസ്ഥാനം", scheme_name: "പദ്ധതി പേര്", your_story: "നിങ്ങളുടെ കഥ", submit: "സമർപ്പിക്കുക", story_submitted: "നന്ദി! നിങ്ങളുടെ കഥ സമർപ്പിച്ചു.",
    checklist_title: "രേഖ ചെക്ക്‌ലിസ്റ്റ്", checklist_subtitle: "പദ്ധതി തിരഞ്ഞെടുക്കുക.", select_scheme: "പദ്ധതി തിരഞ്ഞെടുക്കുക", your_checklist: "നിങ്ങളുടെ ചെക്ക്‌ലിസ്റ്റ്", copy_checklist: "ചെക്ക്‌ലിസ്റ്റ് പകർത്തുക", checklist_ready: "ചെക്ക്‌ലിസ്റ്റ് തയ്യാർ!", document_available: "ഈ രേഖ എന്റെ കൈവശമുണ്ട്", document_needed: "ലഭ്യമാക്കേണ്ടതാണ്",
    loading: "ലോഡ് ചെയ്യുന്നു...", error: "എന്തോ തെറ്റ് സംഭവിച്ചു", sign_in: "സൈൻ ഇൻ", sign_in_required: "സൈൻ ഇൻ ആവശ്യമാണ്", language: "ഭാഷ",
  },

  // Punjabi
  pa: {
    nav_home: "ਹੋਮ", nav_browse: "ਯੋਜਨਾਵਾਂ ਵੇਖੋ", nav_find: "ਯੋਗਤਾ ਜਾਂਚੋ", nav_ai: "AI ਸਹਾਇਕ", nav_about: "ਸਾਡੇ ਬਾਰੇ", nav_tracker: "ਟ੍ਰੈਕਰ", nav_saved: "ਸੇਵ ਕੀਤੇ", nav_profile: "ਪ੍ਰੋਫ਼ਾਈਲ", nav_login: "ਲੌਗਇਨ", nav_logout: "ਲੌਗਆਊਟ", nav_compare: "ਤੁਲਨਾ", nav_stories: "ਸਫ਼ਲਤਾ ਦੀਆਂ ਕਹਾਣੀਆਂ", nav_checklist: "ਦਸਤਾਵੇਜ਼ ਚੈੱਕਲਿਸਟ",
    hero_title: "ਤੁਹਾਡੇ ਲਈ ਕਿਹੜੀਆਂ ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਹਨ ਜਾਣੋ", hero_subtitle: "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਕਲਿਆਣ ਯੋਜਨਾਵਾਂ ਲੱਭੋ.", hero_cta: "ਮੇਰੀ ਯੋਗਤਾ ਜਾਂਚੋ", hero_browse: "ਸਾਰੀਆਂ ਯੋਜਨਾਵਾਂ ਵੇਖੋ", hero_search_placeholder: "ਯੋਜਨਾ ਦਾ ਨਾਮ ਜਾਂ ਕੀਵਰਡ ਖੋਜੋ...",
    stats_total: "ਕੁੱਲ ਯੋਜਨਾਵਾਂ", stats_central: "ਕੇਂਦਰ ਸਰਕਾਰ ਦੀਆਂ ਯੋਜਨਾਵਾਂ", stats_state: "ਰਾਜ ਸਰਕਾਰ ਦੀਆਂ ਯੋਜਨਾਵਾਂ", stats_beneficiaries: "ਲਾਭਪਾਤਰੀ",
    featured_title: "ਵਿਸ਼ੇਸ਼ ਯੋਜਨਾਵਾਂ", featured_subtitle: "ਸਰਗਰਮ ਮੁੱਖ ਯੋਜਨਾਵਾਂ.", view_all: "ਸਭ ਯੋਜਨਾਵਾਂ ਵੇਖੋ",
    smart_discovery: "ਸਮਾਰਟ ਖੋਜ", smart_discovery_desc: "ਤੁਹਾਡੀ ਪ੍ਰੋਫ਼ਾਈਲ ਅਨੁਸਾਰ ਯੋਜਨਾਵਾਂ.", ai_assistant: "AI ਸਹਾਇਕ", ai_assistant_desc: "ਸਧਾਰਨ ਭਾਸ਼ਾ ਵਿੱਚ ਸਵਾਲ ਪੁੱਛੋ.", trusted_info: "ਭਰੋਸੇਮੰਦ ਜਾਣਕਾਰੀ", trusted_info_desc: "ਸਰਕਾਰੀ ਪੋਰਟਲਾਂ ਤੋਂ ਜਾਣਕਾਰੀ.",
    schemes_near_me: "ਮੇਰੇ ਨੇੜੇ ਦੀਆਂ ਯੋਜਨਾਵਾਂ", schemes_near_me_desc: "ਤੁਹਾਡੇ ਰਾਜ ਦੀਆਂ ਯੋਜਨਾਵਾਂ ਲੱਭੋ", select_state: "ਆਪਣਾ ਰਾਜ ਚੁਣੋ",
    success_stories_title: "ਸਫ਼ਲਤਾ ਦੀਆਂ ਕਹਾਣੀਆਂ", success_stories_subtitle: "ਯੋਜਨਾਵਾਂ ਨੇ ਜ਼ਿੰਦਗੀ ਕਿਵੇਂ ਬਦਲੀ.", read_more_stories: "ਹੋਰ ਕਹਾਣੀਆਂ ਪੜ੍ਹੋ",
    browse_schemes: "ਯੋਜਨਾਵਾਂ ਵੇਖੋ", schemes_found: "ਯੋਜਨਾਵਾਂ ਮਿਲੀਆਂ", search_schemes: "ਯੋਜਨਾਵਾਂ ਖੋਜੋ...", category: "ਸ਼੍ਰੇਣੀ", all_categories: "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ", scheme_type: "ਯੋਜਨਾ ਦੀ ਕਿਸਮ", all_types: "ਸਾਰੀਆਂ ਕਿਸਮਾਂ", central_govt: "ਕੇਂਦਰ ਸਰਕਾਰ", state_govt: "ਰਾਜ ਸਰਕਾਰ", gender: "ਲਿੰਗ", all_genders: "ਸਾਰੇ ਲਿੰਗ", male: "ਪੁਰਸ਼", female: "ਔਰਤ", transgender: "ਟ੍ਰਾਂਸਜੈਂਡਰ", age: "ਉਮਰ", reset_filters: "ਫ਼ਿਲਟਰ ਰੀਸੈੱਟ", no_schemes_found: "ਕੋਈ ਯੋਜਨਾ ਨਹੀਂ ਮਿਲੀ", adjust_filters: "ਫ਼ਿਲਟਰ ਬਦਲੋ.", clear_filters: "ਸਾਰੇ ਫ਼ਿਲਟਰ ਹਟਾਓ", view_details: "ਵੇਰਵੇ →", previous: "ਪਿਛਲਾ", next: "ਅਗਲਾ", filters: "ਫ਼ਿਲਟਰ",
    back_to_schemes: "ਯੋਜਨਾਵਾਂ ਤੇ ਵਾਪਸ", central_government: "ਕੇਂਦਰ ਸਰਕਾਰ", state_government: "ਰਾਜ ਸਰਕਾਰ", last_updated: "ਆਖ਼ਰੀ ਅੱਪਡੇਟ", share: "ਸਾਂਝਾ ਕਰੋ", save: "ਸੇਵ ਕਰੋ", saved: "ਸੇਵ ਕੀਤਾ", track_application: "ਅਰਜ਼ੀ ਟ੍ਰੈਕ ਕਰੋ", ready_to_apply: "ਅਰਜ਼ੀ ਲਈ ਤਿਆਰ?", apply_on_website: "ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ ਤੇ ਅਰਜ਼ੀ ਦਿਓ", key_benefits: "ਮੁੱਖ ਫ਼ਾਇਦੇ", eligibility_criteria: "ਯੋਗਤਾ ਮਾਪਦੰਡ", required_documents: "ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼", application_process: "ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ", faqs: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ", rate_this_scheme: "ਇਸ ਯੋਜਨਾ ਨੂੰ ਰੇਟ ਕਰੋ", average_rating: "ਔਸਤ ਰੇਟਿੰਗ", compare: "ਤੁਲਨਾ ਕਰੋ",
    find_title: "ਆਪਣੇ ਫ਼ਾਇਦੇ ਲੱਭੋ", find_subtitle: "ਕੁਝ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ.", personal_details: "ਨਿੱਜੀ ਵੇਰਵੇ", location: "ਥਾਂ", financial_status: "ਆਰਥਿਕ ਸਥਿਤੀ", what_is_age: "ਤੁਹਾਡੀ ਉਮਰ ਕੀ ਹੈ?", select_gender: "ਲਿੰਗ ਚੁਣੋ", social_category: "ਸਮਾਜਿਕ ਵਰਗ", select_category: "ਵਰਗ ਚੁਣੋ", which_state: "ਤੁਸੀਂ ਕਿਹੜੇ ਰਾਜ ਵਿੱਚ ਰਹਿੰਦੇ ਹੋ?", annual_income: "ਸਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ (₹)", income_hint: "ਸਾਲ ਦੀ ਅੰਦਾਜ਼ਨ ਕੁੱਲ ਆਮਦਨ", occupation_status: "ਕਿੱਤੇ ਦੀ ਸਥਿਤੀ", select_occupation: "ਕਿੱਤਾ ਚੁਣੋ", student: "ਵਿਦਿਆਰਥੀ", farmer: "ਕਿਸਾਨ", employed: "ਨੌਕਰੀਪੇਸ਼ਾ", self_employed: "ਸਵੈ-ਰੋਜ਼ਗਾਰ / ਕਾਰੋਬਾਰ", unemployed: "ਬੇਰੁਜ਼ਗਾਰ", homemaker: "ਘਰੇਲੂ", retired: "ਸੇਵਾਮੁਕਤ", back: "ਪਿੱਛੇ", continue_btn: "ਜਾਰੀ ਰੱਖੋ", show_results: "ਨਤੀਜੇ ਦਿਖਾਓ", checking: "ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ...", restored_answers: "ਤੁਹਾਡੇ ਪਿਛਲੇ ਜਵਾਬ ਬਹਾਲ ਕੀਤੇ ਗਏ.", clear: "ਸਾਫ਼ ਕਰੋ", start_over: "ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
    results_title: "ਤੁਹਾਡੇ ਯੋਗਤਾ ਨਤੀਜੇ", results_subtitle: "ਤੁਹਾਡੀ ਪ੍ਰੋਫ਼ਾਈਲ ਦੇ ਆਧਾਰ ਤੇ.", high_match: "ਉੱਚ ਮੇਲ", partial_match: "ਅੰਸ਼ਕ ਮੇਲ", match_label: "ਮੇਲ", track_all: "ਸਭ ਟ੍ਰੈਕ ਕਰੋ", tracking: "ਟ੍ਰੈਕਿੰਗ", missing: "ਉਪਲਬਧ ਨਹੀਂ", top_schemes: "ਚੋਟੀ ਦੀਆਂ ਯੋਜਨਾਵਾਂ", personalized_dashboard: "ਨਿੱਜੀ ਡੈਸ਼ਬੋਰਡ",
    ai_page_title: "AI ਸਹਾਇਕ", ai_page_subtitle: "AI ਸਹਾਇਕ ਨਾਲ ਗੱਲ ਕਰਨ ਲਈ ਲੌਗਇਨ ਕਰੋ.", login_to_chat: "ਗੱਲਬਾਤ ਲਈ ਲੌਗਇਨ", new_chat: "ਨਵੀਂ ਗੱਲਬਾਤ", how_can_help: "ਅੱਜ ਕਿਵੇਂ ਮਦਦ ਕਰਾਂ?", ask_anything: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਬਾਰੇ ਪੁੱਛੋ.", ai_disclaimer: "AI ਗ਼ਲਤੀਆਂ ਕਰ ਸਕਦਾ ਹੈ. ਸਰਕਾਰੀ ਪੋਰਟਲ ਤੇ ਪੁਸ਼ਟੀ ਕਰੋ.", send: "ਭੇਜੋ", doc_checklist: "ਦਸਤਾਵੇਜ਼ ਚੈੱਕਲਿਸਟ", generate_checklist: "ਚੈੱਕਲਿਸਟ ਬਣਾਓ",
    tracker_title: "ਅਰਜ਼ੀ ਟ੍ਰੈਕਰ", tracker_subtitle: "ਹਰ ਅਰਜ਼ੀ ਟ੍ਰੈਕ ਕਰੋ", add_scheme: "ਯੋਜਨਾ ਜੋੜੋ", not_started: "ਸ਼ੁਰੂ ਨਹੀਂ ਹੋਈ", applied: "ਅਰਜ਼ੀ ਦਿੱਤੀ", under_review: "ਸਮੀਖਿਆ ਅਧੀਨ", approved: "ਮਨਜ਼ੂਰ", rejected: "ਰੱਦ", congrats_approved: "ਵਧਾਈਆਂ! ਤੁਹਾਡੀਆਂ ਯੋਜਨਾਵਾਂ ਮਨਜ਼ੂਰ ਹੋਈਆਂ.", no_tracked: "ਅਜੇ ਕੋਈ ਅਰਜ਼ੀ ਟ੍ਰੈਕ ਨਹੀਂ ਕੀਤੀ", browse_to_track: "ਟ੍ਰੈਕਿੰਗ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਯੋਜਨਾਵਾਂ ਵੇਖੋ", update: "ਅੱਪਡੇਟ", update_status: "ਸਥਿਤੀ ਅੱਪਡੇਟ ਕਰੋ", status: "ਸਥਿਤੀ", notes: "ਨੋਟਸ (ਵਿਕਲਪਕ)", notes_placeholder: "ਹਵਾਲਾ ਨੰਬਰ, ਸੰਪਰਕ...", remove: "ਹਟਾਓ", deadline: "ਅੰਤਿਮ ਮਿਤੀ", set_deadline: "ਅੰਤਿਮ ਮਿਤੀ ਸੈੱਟ ਕਰੋ", deadline_approaching: "ਅੰਤਿਮ ਮਿਤੀ ਨੇੜੇ!", share_benefits: "ਮੇਰੇ ਫ਼ਾਇਦੇ ਸਾਂਝੇ ਕਰੋ",
    saved_title: "ਸੇਵ ਕੀਤੀਆਂ ਯੋਜਨਾਵਾਂ", saved_subtitle: "ਤੁਹਾਡੀ ਦਿਲਚਸਪੀ ਦੀਆਂ ਯੋਜਨਾਵਾਂ.", no_saved: "ਸੇਵ ਕੀਤੀਆਂ ਯੋਜਨਾਵਾਂ ਨਹੀਂ", no_saved_desc: "ਅਜੇ ਯੋਜਨਾਵਾਂ ਸੇਵ ਨਹੀਂ ਕੀਤੀਆਂ.", export_pdf: "PDF ਡਾਊਨਲੋਡ",
    compare_title: "ਯੋਜਨਾਵਾਂ ਦੀ ਤੁਲਨਾ", compare_subtitle: "3 ਯੋਜਨਾਵਾਂ ਦੀ ਤੁਲਨਾ.", select_schemes: "ਤੁਲਨਾ ਲਈ ਚੁਣੋ", compare_now: "ਹੁਣੇ ਤੁਲਨਾ ਕਰੋ", clear_all: "ਸਭ ਹਟਾਓ", no_compare: "ਤੁਲਨਾ ਲਈ ਕੋਈ ਯੋਜਨਾ ਨਹੀਂ ਚੁਣੀ.", schemes_selected: "ਯੋਜਨਾਵਾਂ ਚੁਣੀਆਂ", benefits: "ਫ਼ਾਇਦੇ", documents: "ਦਸਤਾਵੇਜ਼", income_limit: "ਆਮਦਨ ਸੀਮਾ", age_limit: "ਉਮਰ ਸੀਮਾ", state_label: "ਰਾਜ",
    stories_title: "ਸਫ਼ਲਤਾ ਦੀਆਂ ਕਹਾਣੀਆਂ", stories_subtitle: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਨੇ ਜ਼ਿੰਦਗੀ ਬਦਲੀ.", submit_story: "ਆਪਣੀ ਕਹਾਣੀ ਸਾਂਝੀ ਕਰੋ", your_name: "ਤੁਹਾਡਾ ਨਾਮ", your_state: "ਤੁਹਾਡਾ ਰਾਜ", scheme_name: "ਯੋਜਨਾ ਦਾ ਨਾਮ", your_story: "ਤੁਹਾਡੀ ਕਹਾਣੀ", submit: "ਜਮ੍ਹਾਂ ਕਰੋ", story_submitted: "ਧੰਨਵਾਦ! ਤੁਹਾਡੀ ਕਹਾਣੀ ਜਮ੍ਹਾਂ ਹੋ ਗਈ.",
    checklist_title: "ਦਸਤਾਵੇਜ਼ ਚੈੱਕਲਿਸਟ", checklist_subtitle: "ਯੋਜਨਾ ਚੁਣੋ.", select_scheme: "ਯੋਜਨਾ ਚੁਣੋ", your_checklist: "ਤੁਹਾਡੀ ਚੈੱਕਲਿਸਟ", copy_checklist: "ਚੈੱਕਲਿਸਟ ਕਾਪੀ", checklist_ready: "ਚੈੱਕਲਿਸਟ ਤਿਆਰ!", document_available: "ਇਹ ਦਸਤਾਵੇਜ਼ ਮੇਰੇ ਕੋਲ ਹੈ", document_needed: "ਲੈਣਾ ਜ਼ਰੂਰੀ ਹੈ",
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...", error: "ਕੁਝ ਗ਼ਲਤ ਹੋ ਗਿਆ", sign_in: "ਸਾਈਨ ਇਨ", sign_in_required: "ਸਾਈਨ ਇਨ ਜ਼ਰੂਰੀ", language: "ਭਾਸ਼ਾ",
  },

  // Odia
  od: {
    nav_home: "ହୋମ", nav_browse: "ଯୋଜନା ଦେଖନ୍ତୁ", nav_find: "ଯୋଗ୍ୟତା ଯାଞ୍ଚ", nav_ai: "AI ସହାୟକ", nav_about: "ଆମ ବିଷୟରେ", nav_tracker: "ଟ୍ରାକର", nav_saved: "ସେଭ୍ କରାଯାଇଥିବା", nav_profile: "ପ୍ରୋଫାଇଲ", nav_login: "ଲଗଇନ", nav_logout: "ଲଗଆଉଟ", nav_compare: "ତୁଳନା", nav_stories: "ସଫଳତା କାହାଣୀ", nav_checklist: "ଡକୁମେଣ୍ଟ ଚେକଲିଷ୍ଟ",
    hero_title: "ଆପଣଙ୍କ ପାଇଁ କେଉଁ ସରକାରୀ ଯୋଜନା ଅଛି ଜାଣନ୍ତୁ", hero_subtitle: "ଭାରତବ୍ୟାପୀ କଲ୍ୟାଣ ଯୋଜନା ଖୋଜନ୍ତୁ।", hero_cta: "ମୋ ଯୋଗ୍ୟତା ଯାଞ୍ଚ କରନ୍ତୁ", hero_browse: "ସବୁ ଯୋଜନା ଦେଖନ୍ତୁ", hero_search_placeholder: "ଯୋଜନା ନାମ ବା କୀୱାର୍ଡ ଖୋଜନ୍ତୁ...",
    stats_total: "ମୋଟ ଯୋଜନା", stats_central: "କେନ୍ଦ୍ର ସରକାର ଯୋଜନା", stats_state: "ରାଜ୍ୟ ସରକାର ଯୋଜନା", stats_beneficiaries: "ହିତାଧିକାରୀ",
    featured_title: "ବିଶେଷ ଯୋଜନା", featured_subtitle: "ସକ୍ରିୟ ପ୍ରମୁଖ ଯୋଜନା।", view_all: "ସବୁ ଯୋଜନା ଦେଖନ୍ତୁ",
    smart_discovery: "ସ୍ମାର୍ଟ ଖୋଜ", smart_discovery_desc: "ଆପଣଙ୍କ ପ୍ରୋଫାଇଲ ଅନୁସାରେ ଯୋଜନା ଖୋଜନ୍ତୁ।", ai_assistant: "AI ସହାୟକ", ai_assistant_desc: "ସରଳ ଭାଷାରେ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ।", trusted_info: "ବିଶ୍ୱସନୀୟ ତଥ୍ୟ", trusted_info_desc: "ସରକାରୀ ପୋର୍ଟାଲରୁ ତଥ୍ୟ।",
    schemes_near_me: "ମୋ ନିକଟସ୍ଥ ଯୋଜନା", schemes_near_me_desc: "ଆପଣଙ୍କ ରାଜ୍ୟ ଯୋଜନା ଖୋଜନ୍ତୁ", select_state: "ଆପଣଙ୍କ ରାଜ୍ୟ ବାଛନ୍ତୁ",
    success_stories_title: "ସଫଳତା କାହାଣୀ", success_stories_subtitle: "ଯୋଜନା ଜୀବନ ବଦଳାଇଲା।", read_more_stories: "ଆହୁରି କାହାଣୀ ପଢ଼ନ୍ତୁ",
    browse_schemes: "ଯୋଜନା ଦେଖନ୍ତୁ", schemes_found: "ଯୋଜନା ମିଳିଲା", search_schemes: "ଯୋଜନା ଖୋଜନ୍ତୁ...", category: "ବର୍ଗ", all_categories: "ସବୁ ବର୍ଗ", scheme_type: "ଯୋଜନା ପ୍ରକାର", all_types: "ସବୁ ପ୍ରକାର", central_govt: "କେନ୍ଦ୍ର ସରକାର", state_govt: "ରାଜ୍ୟ ସରକାର", gender: "ଲିଙ୍ଗ", all_genders: "ସବୁ ଲିଙ୍ଗ", male: "ପୁରୁଷ", female: "ମହିଳା", transgender: "ଟ୍ରାନ୍ସଜେଣ୍ଡର", age: "ବୟସ", reset_filters: "ଫିଲ୍ଟର ରିସେଟ", no_schemes_found: "ଯୋଜନା ମିଳିଲା ନାହିଁ", adjust_filters: "ଫିଲ୍ଟର ବଦଳାନ୍ତୁ।", clear_filters: "ସବୁ ଫିଲ୍ଟର ହଟାନ୍ତୁ", view_details: "ବିବରଣୀ →", previous: "ପୂର୍ବ", next: "ପରବର୍ତ୍ତୀ", filters: "ଫିଲ୍ଟର",
    back_to_schemes: "ଯୋଜନାକୁ ଫେରନ୍ତୁ", central_government: "କେନ୍ଦ୍ର ସରକାର", state_government: "ରାଜ୍ୟ ସରକାର", last_updated: "ଶେଷ ଅପଡେଟ", share: "ଶେୟାର", save: "ସେଭ", saved: "ସେଭ ହୋଇଛି", track_application: "ଆବେଦନ ଟ୍ରାକ", ready_to_apply: "ଆବେଦନ ପାଇଁ ପ୍ରସ୍ତୁତ?", apply_on_website: "ଅଧିକୃତ ୱେବସାଇଟରେ ଆବେଦନ", key_benefits: "ମୁଖ୍ୟ ସୁବିଧା", eligibility_criteria: "ଯୋଗ୍ୟତା ମାନଦଣ୍ଡ", required_documents: "ଆବଶ୍ୟକ ଡକୁମେଣ୍ଟ", application_process: "ଆବେଦନ ପ୍ରକ୍ରିୟା", faqs: "ସାଧାରଣ ପ୍ରଶ୍ନ", rate_this_scheme: "ଏହି ଯୋଜନାକୁ ରେଟ କରନ୍ତୁ", average_rating: "ହାରାହାରି ରେଟିଂ", compare: "ତୁଳନା",
    find_title: "ଆପଣଙ୍କ ସୁବିଧା ଖୋଜନ୍ତୁ", find_subtitle: "କିଛି ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଅନ୍ତୁ।", personal_details: "ବ୍ୟକ୍ତିଗତ ବିବରଣୀ", location: "ସ୍ଥାନ", financial_status: "ଆର୍ଥିକ ସ୍ଥିତି", what_is_age: "ଆପଣଙ୍କ ବୟସ କେତେ?", select_gender: "ଲିଙ୍ଗ ବାଛନ୍ତୁ", social_category: "ସାମାଜିକ ବର୍ଗ", select_category: "ବର୍ଗ ବାଛନ୍ତୁ", which_state: "ଆପଣ କେଉଁ ରାଜ୍ୟରେ ରୁହନ୍ତି?", annual_income: "ବାର୍ଷିକ ପାରିବାରିକ ଆୟ (₹)", income_hint: "ବର୍ଷର ଅନୁମାନିତ ମୋଟ ଆୟ", occupation_status: "ବୃତ୍ତି ସ୍ଥିତି", select_occupation: "ବୃତ୍ତି ବାଛନ୍ତୁ", student: "ଛାତ୍ର", farmer: "କୃଷକ", employed: "ଚାକିରିଆ", self_employed: "ସ୍ୱନିଯୁକ୍ତ / ବ୍ୟବସାୟ", unemployed: "ବେକାର", homemaker: "ଗୃହିଣୀ", retired: "ଅବସରପ୍ରାପ୍ତ", back: "ପଛକୁ", continue_btn: "ଜାରି ରଖନ୍ତୁ", show_results: "ଫଳାଫଳ ଦେଖାନ୍ତୁ", checking: "ଯାଞ୍ଚ ହେଉଛି...", restored_answers: "ଆପଣଙ୍କ ପୂର୍ବ ଉତ୍ତର ପୁନସ୍ଥାପିତ ହେଲା।", clear: "ସଫା କରନ୍ତୁ", start_over: "ପୁଣି ଆରମ୍ଭ କରନ୍ତୁ",
    results_title: "ଆପଣଙ୍କ ଯୋଗ୍ୟତା ଫଳାଫଳ", results_subtitle: "ଆପଣଙ୍କ ପ୍ରୋଫାଇଲ ଆଧାରରେ।", high_match: "ଉଚ୍ଚ ମେଳ", partial_match: "ଆଂଶିକ ମେଳ", match_label: "ମେଳ", track_all: "ସବୁ ଟ୍ରାକ", tracking: "ଟ୍ରାକିଂ", missing: "ଉପಲ୍ବ୍ଧ ନୁହେଁ", top_schemes: "ଶୀର୍ଷ ଯୋଜନା", personalized_dashboard: "ବ୍ୟକ୍ତିଗତ ଡ୍ୟାସବୋର୍ଡ",
    ai_page_title: "AI ସହାୟକ", ai_page_subtitle: "AI ସହ ଚାଟ ପାଇଁ ଲଗଇନ।", login_to_chat: "ଚାଟ ପାଇଁ ଲଗଇନ", new_chat: "ନୂଆ ଚାଟ", how_can_help: "ଆଜି କିପରି ସାହାଯ୍ୟ କରିବି?", ask_anything: "ସରକାରୀ ଯୋଜନା ବିଷୟରେ ପଚାରନ୍ତୁ।", ai_disclaimer: "AI ଭୁଲ କରିପାରେ। ସରକାରୀ ପୋର୍ଟାଲରେ ଯାଞ୍ଚ କରନ୍ତୁ।", send: "ପଠାନ୍ତୁ", doc_checklist: "ଡକୁମେଣ୍ଟ ଚେକଲିଷ୍ଟ", generate_checklist: "ଚେକଲିଷ୍ଟ ତିଆରି",
    tracker_title: "ଆବେଦନ ଟ୍ରାକର", tracker_subtitle: "ପ୍ରତ୍ୟେକ ଆବେଦନ ଟ୍ରାକ କରନ୍ତୁ", add_scheme: "ଯୋଜନା ଯୋଡ଼ନ୍ତୁ", not_started: "ଆରମ୍ଭ ହୋଇନାହିଁ", applied: "ଆବେଦନ କରାଯାଇଛି", under_review: "ସମୀକ୍ଷାରେ", approved: "ଅନୁମୋଦିତ", rejected: "ପ୍ରତ୍ୟାଖ୍ୟାତ", congrats_approved: "ଅଭିନନ୍ଦନ! ଆପଣଙ୍କ ଯୋଜନା ଅନୁମୋଦିତ।", no_tracked: "ଏପର୍ଯ୍ୟନ୍ତ ଟ୍ରାକ ହୋଇନାହିଁ", browse_to_track: "ଟ୍ରାକିଂ ଆରମ୍ଭ ପାଇଁ ଯୋଜନା ଦେଖନ୍ତୁ", update: "ଅପଡେଟ", update_status: "ସ୍ଥିତି ଅପଡେଟ", status: "ସ୍ଥିତି", notes: "ନୋଟ (ଐଚ୍ଛିକ)", notes_placeholder: "ରେଫରେନ୍ସ ନମ୍ବର, ଯୋଗାଯୋଗ...", remove: "ହଟାନ୍ତୁ", deadline: "ସମୟସୀମା", set_deadline: "ସମୟସୀମା ସେଟ", deadline_approaching: "ସମୟସୀମା ନିକଟ!", share_benefits: "ମୋ ସୁବିଧା ଶେୟାର",
    saved_title: "ସେଭ ହୋଇଥିବା ଯୋଜନା", saved_subtitle: "ଆପଣଙ୍କ ଆଗ୍ରହୀ ଯୋଜନା।", no_saved: "ସେଭ ହୋଇଥିବା ଯୋଜନା ନାହିଁ", no_saved_desc: "ଏପର୍ଯ୍ୟନ୍ତ ଯୋଜନା ସେଭ ହୋଇନାହିଁ।", export_pdf: "PDF ଡାଉନଲୋଡ",
    compare_title: "ଯୋଜନା ତୁଳନା", compare_subtitle: "୩ ଯୋଜନା ତୁଳନା।", select_schemes: "ତୁଳନା ପାଇଁ ବାଛନ୍ତୁ", compare_now: "ଏବେ ତୁଳନା", clear_all: "ସବୁ ହଟାନ୍ତୁ", no_compare: "ତୁଳନା ପାଇଁ ଯୋଜନା ବାଛା ହୋଇନାହିଁ।", schemes_selected: "ଯୋଜନା ବାଛା", benefits: "ସୁବିଧା", documents: "ଡକୁମେଣ୍ଟ", income_limit: "ଆୟ ସୀମା", age_limit: "ବୟସ ସୀମା", state_label: "ରାଜ୍ୟ",
    stories_title: "ସଫଳତା କାହାଣୀ", stories_subtitle: "ସରକାରୀ ଯୋଜନା ଜୀବନ ବଦଳାଇଲା।", submit_story: "ଆପଣଙ୍କ କାହାଣୀ ଶେୟାର କରନ୍ତୁ", your_name: "ଆପଣଙ୍କ ନାମ", your_state: "ଆପଣଙ୍କ ରାଜ୍ୟ", scheme_name: "ଯୋଜନା ନାମ", your_story: "ଆପଣଙ୍କ କାହାଣୀ", submit: "ଦାଖଲ କରନ୍ତୁ", story_submitted: "ଧନ୍ୟବାଦ! ଆପଣଙ୍କ କାହାଣୀ ଦାଖଲ ହୋଇଛି।",
    checklist_title: "ଡକୁମେଣ୍ଟ ଚେକଲିଷ୍ଟ", checklist_subtitle: "ଯୋଜନା ବାଛନ୍ତୁ।", select_scheme: "ଯୋଜନା ବାଛନ୍ତୁ", your_checklist: "ଆପଣଙ୍କ ଚେକଲିଷ୍ଟ", copy_checklist: "ଚେକଲିଷ୍ଟ କପି", checklist_ready: "ଚେକଲିଷ୍ଟ ପ୍ରସ୍ତୁତ!", document_available: "ଏହି ଡକୁମେଣ୍ଟ ମୋ ପାଖରେ ଅଛି", document_needed: "ସଂଗ୍ରହ କରିବାକୁ ହେବ",
    loading: "ଲୋଡ ହେଉଛି...", error: "କିଛି ଭୁଲ ହେଲା", sign_in: "ସାଇନ ଇନ", sign_in_required: "ସାଇନ ଇନ ଆବଶ୍ୟକ", language: "ଭାଷା",
  },

  // Urdu
  ur: {
    nav_home: "ہوم", nav_browse: "اسکیمیں دیکھیں", nav_find: "اہلیت جانچیں", nav_ai: "AI مددگار", nav_about: "ہمارے بارے میں", nav_tracker: "ٹریکر", nav_saved: "محفوظ", nav_profile: "پروفائل", nav_login: "لاگ ان", nav_logout: "لاگ آؤٹ", nav_compare: "موازنہ", nav_stories: "کامیابی کی کہانیاں", nav_checklist: "دستاویز چیک لسٹ",
    hero_title: "جانیں آپ کے لیے کون سی سرکاری اسکیمیں ہیں", hero_subtitle: "پورے ہندوستان میں فلاحی اسکیمیں تلاش کریں۔", hero_cta: "میری اہلیت جانچیں", hero_browse: "تمام اسکیمیں دیکھیں", hero_search_placeholder: "اسکیم کا نام یا کلیدی لفظ تلاش کریں...",
    stats_total: "کل اسکیمیں", stats_central: "مرکزی حکومت کی اسکیمیں", stats_state: "ریاستی حکومت کی اسکیمیں", stats_beneficiaries: "مستفیدین",
    featured_title: "خاص اسکیمیں", featured_subtitle: "فعال اہم اسکیمیں۔", view_all: "سب دیکھیں",
    smart_discovery: "سمارٹ تلاش", smart_discovery_desc: "اپنے پروفائل کے مطابق اسکیمیں تلاش کریں۔", ai_assistant: "AI مددگار", ai_assistant_desc: "آسان زبان میں سوالات پوچھیں۔", trusted_info: "قابل اعتماد معلومات", trusted_info_desc: "سرکاری پورٹلز سے معلومات۔",
    schemes_near_me: "میرے قریب کی اسکیمیں", schemes_near_me_desc: "اپنی ریاست کی اسکیمیں تلاش کریں", select_state: "اپنی ریاست منتخب کریں",
    success_stories_title: "کامیابی کی کہانیاں", success_stories_subtitle: "اسکیموں نے زندگیاں بدلیں۔", read_more_stories: "مزید کہانیاں پڑھیں",
    browse_schemes: "اسکیمیں دیکھیں", schemes_found: "اسکیمیں ملیں", search_schemes: "اسکیمیں تلاش کریں...", category: "زمرہ", all_categories: "تمام زمرے", scheme_type: "اسکیم کی قسم", all_types: "تمام قسمیں", central_govt: "مرکزی حکومت", state_govt: "ریاستی حکومت", gender: "جنس", all_genders: "تمام", male: "مرد", female: "عورت", transgender: "ٹرانسجینڈر", age: "عمر", reset_filters: "فلٹرز ری سیٹ", no_schemes_found: "کوئی اسکیم نہیں ملی", adjust_filters: "فلٹرز تبدیل کریں۔", clear_filters: "تمام فلٹرز ہٹائیں", view_details: "تفصیلات →", previous: "پچھلا", next: "اگلا", filters: "فلٹرز",
    back_to_schemes: "اسکیموں پر واپس", central_government: "مرکزی حکومت", state_government: "ریاستی حکومت", last_updated: "آخری اپ ڈیٹ", share: "شیئر", save: "محفوظ کریں", saved: "محفوظ", track_application: "درخواست ٹریک کریں", ready_to_apply: "درخواست کے لیے تیار؟", apply_on_website: "سرکاری ویب سائٹ پر درخواست دیں", key_benefits: "اہم فوائد", eligibility_criteria: "اہلیت کے معیار", required_documents: "ضروری دستاویزات", application_process: "درخواست کا عمل", faqs: "عام سوالات", rate_this_scheme: "اس اسکیم کو ریٹ کریں", average_rating: "اوسط ریٹنگ", compare: "موازنہ",
    find_title: "اپنے فوائد تلاش کریں", find_subtitle: "چند سوالات کے جوابات دیں۔", personal_details: "ذاتی تفصیلات", location: "مقام", financial_status: "مالی حالت", what_is_age: "آپ کی عمر کیا ہے؟", select_gender: "جنس منتخب کریں", social_category: "سماجی زمرہ", select_category: "زمرہ منتخب کریں", which_state: "آپ کس ریاست میں رہتے ہیں؟", annual_income: "سالانہ خاندانی آمدنی (₹)", income_hint: "سال کی تخمینی کل آمدنی", occupation_status: "پیشہ کی حیثیت", select_occupation: "پیشہ منتخب کریں", student: "طالب علم", farmer: "کسان", employed: "ملازم", self_employed: "خود روزگار / کاروبار", unemployed: "بے روزگار", homemaker: "گھریلو", retired: "ریٹائرڈ", back: "پیچھے", continue_btn: "جاری رکھیں", show_results: "نتائج دکھائیں", checking: "جانچ ہو رہی ہے...", restored_answers: "آپ کے پچھلے جوابات بحال کیے گئے۔", clear: "صاف کریں", start_over: "دوبارہ شروع کریں",
    results_title: "آپ کے اہلیت کے نتائج", results_subtitle: "آپ کے پروفائل کی بنیاد پر۔", high_match: "زیادہ مماثلت", partial_match: "جزوی مماثلت", match_label: "مماثلت", track_all: "سب ٹریک کریں", tracking: "ٹریکنگ", missing: "دستیاب نہیں", top_schemes: "سرفہرست اسکیمیں", personalized_dashboard: "ذاتی ڈیش بورڈ",
    ai_page_title: "AI مددگار", ai_page_subtitle: "AI مددگار سے بات کرنے کے لیے لاگ ان کریں۔", login_to_chat: "بات چیت کے لیے لاگ ان", new_chat: "نئی بات چیت", how_can_help: "آج کیسے مدد کروں؟", ask_anything: "سرکاری اسکیموں کے بارے میں پوچھیں۔", ai_disclaimer: "AI غلطیاں کر سکتا ہے۔ سرکاری پورٹل پر تصدیق کریں۔", send: "بھیجیں", doc_checklist: "دستاویز چیک لسٹ", generate_checklist: "چیک لسٹ بنائیں",
    tracker_title: "درخواست ٹریکر", tracker_subtitle: "ہر درخواست ٹریک کریں", add_scheme: "اسکیم شامل کریں", not_started: "شروع نہیں ہوئی", applied: "درخواست دی", under_review: "جائزے میں", approved: "منظور", rejected: "مسترد", congrats_approved: "مبارک ہو! آپ کی اسکیمیں منظور ہوئیں۔", no_tracked: "ابھی تک کوئی درخواست ٹریک نہیں", browse_to_track: "ٹریکنگ شروع کرنے کے لیے اسکیمیں دیکھیں", update: "اپ ڈیٹ", update_status: "حیثیت اپ ڈیٹ کریں", status: "حیثیت", notes: "نوٹس (اختیاری)", notes_placeholder: "حوالہ نمبر، رابطہ...", remove: "ہٹائیں", deadline: "آخری تاریخ", set_deadline: "آخری تاریخ مقرر کریں", deadline_approaching: "آخری تاریخ قریب!", share_benefits: "میرے فوائد شیئر کریں",
    saved_title: "محفوظ اسکیمیں", saved_subtitle: "آپ کی دلچسپی کی اسکیمیں۔", no_saved: "محفوظ اسکیمیں نہیں", no_saved_desc: "ابھی تک اسکیمیں محفوظ نہیں کیں۔", export_pdf: "PDF ڈاؤنلوڈ",
    compare_title: "اسکیموں کا موازنہ", compare_subtitle: "3 اسکیموں کا موازنہ۔", select_schemes: "موازنے کے لیے منتخب کریں", compare_now: "ابھی موازنہ کریں", clear_all: "سب ہٹائیں", no_compare: "موازنے کے لیے اسکیمیں منتخب نہیں۔", schemes_selected: "اسکیمیں منتخب", benefits: "فوائد", documents: "دستاویزات", income_limit: "آمدنی کی حد", age_limit: "عمر کی حد", state_label: "ریاست",
    stories_title: "کامیابی کی کہانیاں", stories_subtitle: "سرکاری اسکیموں نے زندگیاں بدلیں۔", submit_story: "اپنی کہانی شیئر کریں", your_name: "آپ کا نام", your_state: "آپ کی ریاست", scheme_name: "اسکیم کا نام", your_story: "آپ کی کہانی", submit: "جمع کریں", story_submitted: "شکریہ! آپ کی کہانی جمع ہو گئی۔",
    checklist_title: "دستاویز چیک لسٹ", checklist_subtitle: "اسکیم منتخب کریں۔", select_scheme: "اسکیم منتخب کریں", your_checklist: "آپ کی چیک لسٹ", copy_checklist: "چیک لسٹ کاپی", checklist_ready: "چیک لسٹ تیار!", document_available: "یہ دستاویز میرے پاس ہے", document_needed: "حاصل کرنا ضروری ہے",
    loading: "لوڈ ہو رہا ہے...", error: "کچھ غلط ہو گیا", sign_in: "سائن ان", sign_in_required: "سائن ان ضروری", language: "زبان",
  },

  // Assamese
  as: {
    nav_home: "হোম", nav_browse: "আঁচনি চাওক", nav_find: "যোগ্যতা পৰীক্ষা", nav_ai: "AI সহায়ক", nav_about: "আমাৰ বিষয়ে", nav_tracker: "ট্ৰেকাৰ", nav_saved: "সংৰক্ষিত", nav_profile: "প্ৰ'ফাইল", nav_login: "লগইন", nav_logout: "লগআউট", nav_compare: "তুলনা", nav_stories: "সফলতাৰ কাহিনী", nav_checklist: "নথি চেকলিষ্ট",
    hero_title: "আপোনাৰ বাবে কোনবোৰ চৰকাৰী আঁচনি আছে জানক", hero_subtitle: "সমগ্ৰ ভাৰতত কল্যাণ আঁচনি বিচাৰক।", hero_cta: "মোৰ যোগ্যতা পৰীক্ষা কৰক", hero_browse: "সকলো আঁচনি চাওক", hero_search_placeholder: "আঁচনিৰ নাম বা শব্দ বিচাৰক...",
    stats_total: "মুঠ আঁচনি", stats_central: "কেন্দ্ৰীয় চৰকাৰৰ আঁচনি", stats_state: "ৰাজ্য চৰকাৰৰ আঁচনি", stats_beneficiaries: "হিতাধিকাৰী",
    featured_title: "বিশেষ আঁচনি", featured_subtitle: "সক্ৰিয় প্ৰধান আঁচনি।", view_all: "সকলো আঁচনি চাওক",
    smart_discovery: "স্মাৰ্ট অনুসন্ধান", smart_discovery_desc: "আপোনাৰ প্ৰ'ফাইল অনুসৰি আঁচনি বিচাৰক।", ai_assistant: "AI সহায়ক", ai_assistant_desc: "সহজ ভাষাত প্ৰশ্ন সোধক।", trusted_info: "বিশ্বাসযোগ্য তথ্য", trusted_info_desc: "চৰকাৰী পৰ্টেলৰ পৰা তথ্য।",
    schemes_near_me: "মোৰ ওচৰৰ আঁচনি", schemes_near_me_desc: "আপোনাৰ ৰাজ্যৰ আঁচনি বিচাৰক", select_state: "আপোনাৰ ৰাজ্য বাছক",
    success_stories_title: "সফলতাৰ কাহিনী", success_stories_subtitle: "আঁচনিয়ে জীৱন সলনি কৰিলে।", read_more_stories: "আৰু কাহিনী পঢ়ক",
    browse_schemes: "আঁচনি চাওক", schemes_found: "আঁচনি পোৱা গ'ল", search_schemes: "আঁচনি বিচাৰক...", category: "শ্ৰেণী", all_categories: "সকলো শ্ৰেণী", scheme_type: "আঁচনিৰ প্ৰকাৰ", all_types: "সকলো প্ৰকাৰ", central_govt: "কেন্দ্ৰীয় চৰকাৰ", state_govt: "ৰাজ্য চৰকাৰ", gender: "লিঙ্গ", all_genders: "সকলো লিঙ্গ", male: "পুৰুষ", female: "মহিলা", transgender: "তৃতীয় লিঙ্গ", age: "বয়স", reset_filters: "ফিল্টাৰ ৰিছেট", no_schemes_found: "আঁচনি পোৱা নগ'ল", adjust_filters: "ফিল্টাৰ সলনি কৰক।", clear_filters: "সকলো ফিল্টাৰ আঁতৰাওক", view_details: "বিৱৰণ →", previous: "আগৰ", next: "পিছৰ", filters: "ফিল্টাৰ",
    back_to_schemes: "আঁচনিলৈ ঘূৰি যাওক", central_government: "কেন্দ্ৰীয় চৰকাৰ", state_government: "ৰাজ্য চৰকাৰ", last_updated: "শেষ আপডেট", share: "শ্বেয়াৰ", save: "সংৰক্ষণ", saved: "সংৰক্ষিত", track_application: "আবেদন ট্ৰেক কৰক", ready_to_apply: "আবেদনৰ বাবে প্ৰস্তুত?", apply_on_website: "অফিচিয়েল ৱেবছাইটত আবেদন কৰক", key_benefits: "মুখ্য সুবিধা", eligibility_criteria: "যোগ্যতাৰ মাপকাঠি", required_documents: "প্ৰয়োজনীয় নথি", application_process: "আবেদন প্ৰক্ৰিয়া", faqs: "সঘনাই সোধা প্ৰশ্ন", rate_this_scheme: "এই আঁচনি ৰেট কৰক", average_rating: "গড় ৰেটিং", compare: "তুলনা",
    find_title: "আপোনাৰ সুবিধা বিচাৰক", find_subtitle: "কেইটামান প্ৰশ্নৰ উত্তৰ দিয়ক।", personal_details: "ব্যক্তিগত বিৱৰণ", location: "স্থান", financial_status: "আৰ্থিক অৱস্থা", what_is_age: "আপোনাৰ বয়স কিমান?", select_gender: "লিঙ্গ বাছক", social_category: "সামাজিক শ্ৰেণী", select_category: "শ্ৰেণী বাছক", which_state: "আপুনি কোন ৰাজ্যত থাকে?", annual_income: "বাৰ্ষিক পৰিয়ালৰ আয় (₹)", income_hint: "বছৰৰ আনুমানিক মুঠ আয়", occupation_status: "বৃত্তিৰ অৱস্থা", select_occupation: "বৃত্তি বাছক", student: "ছাত্ৰ", farmer: "কৃষক", employed: "চাকৰিয়াল", self_employed: "স্বনিয়োজিত / ব্যৱসায়", unemployed: "নিবনুৱা", homemaker: "গৃহিণী", retired: "অৱসৰপ্ৰাপ্ত", back: "পিছলৈ", continue_btn: "আগবাঢ়ক", show_results: "ফলাফল দেখুৱাওক", checking: "পৰীক্ষা হৈ আছে...", restored_answers: "আপোনাৰ আগৰ উত্তৰ পুনৰুদ্ধাৰ কৰা হ'ল।", clear: "মচক", start_over: "পুনৰ আৰম্ভ কৰক",
    results_title: "আপোনাৰ যোগ্যতাৰ ফলাফল", results_subtitle: "আপোনাৰ প্ৰ'ফাইলৰ ভিত্তিত।", high_match: "উচ্চ মিল", partial_match: "আংশিক মিল", match_label: "মিল", track_all: "সকলো ট্ৰেক কৰক", tracking: "ট্ৰেকিং", missing: "উপলব্ধ নহয়", top_schemes: "শীৰ্ষ আঁচনি", personalized_dashboard: "ব্যক্তিগত ডেশ্ববৰ্ড",
    ai_page_title: "AI সহায়ক", ai_page_subtitle: "AI সহায়কৰ সৈতে কথা পাতিবলৈ লগইন কৰক।", login_to_chat: "কথোপকথনৰ বাবে লগইন", new_chat: "নতুন কথোপকথন", how_can_help: "আজি কেনেকৈ সহায় কৰিব পাৰোঁ?", ask_anything: "চৰকাৰী আঁচনিৰ বিষয়ে সোধক।", ai_disclaimer: "AI ভুল কৰিব পাৰে। চৰকাৰী পৰ্টেলত পৰীক্ষা কৰক।", send: "পঠিয়াওক", doc_checklist: "নথি চেকলিষ্ট", generate_checklist: "চেকলিষ্ট তৈয়াৰ কৰক",
    tracker_title: "আবেদন ট্ৰেকাৰ", tracker_subtitle: "প্ৰতিটো আবেদন ট্ৰেক কৰক", add_scheme: "আঁচনি যোগ কৰক", not_started: "আৰম্ভ হোৱা নাই", applied: "আবেদন কৰা হৈছে", under_review: "পৰীক্ষাত", approved: "অনুমোদিত", rejected: "প্ৰত্যাখ্যান", congrats_approved: "অভিনন্দন! আপোনাৰ আঁচনি অনুমোদিত হৈছে।", no_tracked: "এতিয়ালৈকে ট্ৰেক কৰা হোৱা নাই", browse_to_track: "ট্ৰেকিং আৰম্ভ কৰিবলৈ আঁচনি চাওক", update: "আপডেট", update_status: "অৱস্থা আপডেট কৰক", status: "অৱস্থা", notes: "টোকা (ঐচ্ছিক)", notes_placeholder: "ৰেফাৰেন্স নম্বৰ, যোগাযোগ...", remove: "আঁতৰাওক", deadline: "সময়সীমা", set_deadline: "সময়সীমা নিৰ্ধাৰণ কৰক", deadline_approaching: "সময়সীমা ওচৰ চাপিছে!", share_benefits: "মোৰ সুবিধা শ্বেয়াৰ কৰক",
    saved_title: "সংৰক্ষিত আঁচনি", saved_subtitle: "আপোনাৰ আগ্ৰহী আঁচনি।", no_saved: "সংৰক্ষিত আঁচনি নাই", no_saved_desc: "এতিয়ালৈকে আঁচনি সংৰক্ষণ কৰা হোৱা নাই।", export_pdf: "PDF ডাউনলোড",
    compare_title: "আঁচনি তুলনা", compare_subtitle: "৩ আঁচনি তুলনা কৰক।", select_schemes: "তুলনাৰ বাবে বাছক", compare_now: "এতিয়া তুলনা কৰক", clear_all: "সকলো আঁতৰাওক", no_compare: "তুলনাৰ বাবে আঁচনি বাছনি কৰা হোৱা নাই।", schemes_selected: "আঁচনি বাছনি কৰা হৈছে", benefits: "সুবিধা", documents: "নথি", income_limit: "আয়ৰ সীমা", age_limit: "বয়সৰ সীমা", state_label: "ৰাজ্য",
    stories_title: "সফলতাৰ কাহিনী", stories_subtitle: "চৰকাৰী আঁচনিয়ে জীৱন সলনি কৰিলে।", submit_story: "আপোনাৰ কাহিনী শ্বেয়াৰ কৰক", your_name: "আপোনাৰ নাম", your_state: "আপোনাৰ ৰাজ্য", scheme_name: "আঁচনিৰ নাম", your_story: "আপোনাৰ কাহিনী", submit: "দাখিল কৰক", story_submitted: "ধন্যবাদ! আপোনাৰ কাহিনী দাখিল হৈছে।",
    checklist_title: "নথি চেকলিষ্ট", checklist_subtitle: "আঁচনি বাছক।", select_scheme: "আঁচনি বাছক", your_checklist: "আপোনাৰ চেকলিষ্ট", copy_checklist: "চেকলিষ্ট কপি", checklist_ready: "চেকলিষ্ট সাজু!", document_available: "এই নথি মোৰ ওচৰত আছে", document_needed: "সংগ্ৰহ কৰিব লাগিব",
    loading: "লোড হৈ আছে...", error: "কিবা ভুল হ'ল", sign_in: "ছাইন ইন", sign_in_required: "ছাইন ইন প্ৰয়োজনীয়", language: "ভাষা",
  },
};
