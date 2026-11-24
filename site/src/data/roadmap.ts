export type BusinessId = "xidmet" | "ticaret" | "iase" | "tehsil" | "diger"

export type Business = {
  id: BusinessId
  label: string
  examples: string
}

export type Step = {
  id: string
  title: string
  short: string
  goal: string
  metric: string
  details: Record<BusinessId, string>
}

export const businesses: Business[] = [
  { id: "xidmet", label: "Xidmət", examples: "Gözəllik salonu, klinika, usta, avtoservis" },
  { id: "ticaret", label: "Ticarət", examples: "Mağaza, onlayn satış, topdan satış" },
  { id: "iase", label: "İctimai iaşə", examples: "Kafe, restoran, şirniyyat sexi" },
  { id: "tehsil", label: "Təhsil", examples: "Kurs mərkəzi, repetitor, uşaq mərkəzi" },
  { id: "diger", label: "Başqa sahə", examples: "Sifarişlə iş, agentlik, kiçik istehsal" },
]

export const defaultBusiness: BusinessId = "xidmet"

export function isBusinessId(value: string | null): value is BusinessId {
  return businesses.some((b) => b.id === value)
}

export const steps: Step[] = [
  {
    id: "baza",
    title: "Müştəri bazası",
    short: "Müştəri bazası",
    goal: "Dəftər, WhatsApp yazışmaları və işçilərin yaddaşı bir cədvəldə birləşir.",
    metric: "Bazada telefonu və son alış tarixi olan müştərilərin payı",
    details: {
      xidmet:
        "Müştəri kartı: ad, telefon, hansı ustaya gedir, son xidmət və tarixi, vacib qeyd — allergiya və ya üstünlük.",
      ticaret:
        "Alıcı kartı: telefon, ölçü və ya üstünlük, son alış, ümumi alış məbləği. Instagram-dan yazan alıcı da bura düşür.",
      iase: "Daimi qonaq siyahısı: telefon, ad günü, sevimli sifariş, çatdırılma ünvanı.",
      tehsil: "Tələbə kartı: tələbə və valideyn telefonu, qrup, səviyyə, ödəniş vəziyyəti.",
      diger: "Müştəri kartı: əlaqə, nə sifariş edib, nə vaxt və bizi haradan tapıb.",
    },
  },
  {
    id: "qebul",
    title: "Onlayn sifariş və rezervasiya",
    short: "Onlayn qəbul",
    goal: "Müştəri zəng etmədən müraciət edir, müraciət yazışmada itmir.",
    metric: "Onlayn gələn müraciətlərin payı və ilk cavab müddəti",
    details: {
      xidmet: "Onlayn rezervasiya: müştəri boş saatı və ustanı özü seçir, eyni saata iki nəfər yazılmır.",
      ticaret: "Kataloq və sifariş forması: məhsul, say, çatdırılma və ya mağazadan götürmə.",
      iase: "Masa rezervasiyası və menyu linki ilə çatdırılma sifarişi. Sifariş mətbəxə ekranla və ya çapla çatır.",
      tehsil: "Qeydiyyat forması: kurs, qrup saatı, sınaq dərsinə yazılma.",
      diger: "Sorğu forması: müştəri nə istədiyini, son tarixi və əlaqəsini bir dəfəyə göndərir.",
    },
  },
  {
    id: "odenis",
    title: "Ödəniş",
    short: "Ödəniş",
    goal: "Hər ödəniş müştəri kartına bağlanır, borc ayrıca görünür.",
    metric: "Gecikən ödənişlərin cəmi və nağdsız ödənişlərin payı",
    details: {
      xidmet: "Ödəniş linki ilə avans. Qalan məbləğ xidmətdən sonra kartla alınır.",
      ticaret: "Kart, köçürmə və ödəniş linki. Qapıda nağd ödəniş də sistemdə qeyd olunur.",
      iase: "Masada QR ilə hesab, çatdırılmada onlayn ödəniş.",
      tehsil: "Aylıq ödəniş cədvəli: kim ödəyib, kim gecikib. Ödəniş linki valideynə gedir.",
      diger: "Hesab-faktura və ödəniş linki. Ödəniş gələndə sifarişin statusu dəyişir.",
    },
  },
  {
    id: "xatirlatma",
    title: "Xatırlatma və bildiriş",
    short: "Xatırlatma",
    goal: "Müştəriyə yazmaq işçinin yadına düşməsindən asılı olmur.",
    metric: "Gəlməyən rezervasiyaların sayı və dəvətdən sonra qayıdan müştərilər",
    details: {
      xidmet:
        "Görüşdən 24 və 2 saat əvvəl SMS və ya WhatsApp, təsdiq və vaxtı dəyişmə linki ilə. Uzun müddət gəlməyənə dəvət.",
      ticaret:
        "Sifariş statusu: qəbul olundu, yoldadır, çatdı. Bitmiş məhsul yenidən gələndə gözləyənlərə xəbər.",
      iase: "Rezervasiyadan 2 saat əvvəl təsdiq mesajı. Daimi qonağa ad günü təbriki.",
      tehsil: "Dərs vaxtı dəyişəndə qrupa bildiriş. Ödəniş günündən 3 gün əvvəl valideynə xatırlatma.",
      diger: "Növbəti xidmət vaxtı və ödəniş günü üçün avtomatik xatırlatma.",
    },
  },
  {
    id: "uchot",
    title: "Resurs və anbar uçotu",
    short: "Uçot",
    goal: "İnsan, vaxt və mal bir yerdə görünür.",
    metric: "Mal bitdiyi üçün itən satışlar və işçi doluluğu",
    details: {
      xidmet: "Usta qrafiki və iş yükü. Sərf materiallarının qalığı.",
      ticaret: "Hər satışda azalan anbar qalığı. Minimum həddə düşən məhsullar üçün sifariş siyahısı.",
      iase: "Ərzaq qalığı və texnoloji kart: bir porsiyaya nə sərf olunur. Silinən ərzağın qeydi.",
      tehsil: "Müəllim yükü, otaq və qrup cədvəli. Qruplarda boş yer sayı.",
      diger: "Kim nə üzərində işləyir, nə qədər vaxt gedir, hansı material lazımdır.",
    },
  },
  {
    id: "hesabat",
    title: "Hesabat",
    short: "Hesabat",
    goal: "Rəqəmlər hər həftə eyni gün baxılır və bir qərara çevrilir.",
    metric: "Hər həftəlik baxışdan sonra qəbul olunan bir konkret qərar",
    details: {
      xidmet: "Gəlir, usta üzrə doluluq, ən çox sifariş olunan xidmət, qayıtmayan müştərilər.",
      ticaret: "Satış, ən çox və ən az satılan məhsul, marja, uzun müddət satılmayan qalıq.",
      iase: "Çek sayı, orta çek, ən çox satılan yemək, ərzaq xərcinin satışa nisbəti.",
      tehsil: "Aktiv tələbə sayı, qrup doluluğu, ödəniş borcu, kursu yarımçıq buraxanlar.",
      diger: "Gəlir və xərc, yeni və təkrar müştəri, ən gəlirli xidmət.",
    },
  },
]
