# Növbəti Addım — rəqəmsallaşdırma mərhələləri

Kiçik və orta biznes üçün altı addım. Ardıcıllıq təsadüfi deyil: hər addım əvvəlkinin datasına söykənir. Xatırlatma müştəri bazası olmadan, hesabat isə ödəniş və uçot olmadan işləmir.

Hər addımın sonunda bir qayda var: növbəti addıma keçməzdən əvvəl bu addım hər gün, istisnasız işləməlidir.

## 1. Müştəri bazası

Dəftər, WhatsApp yazışmaları və işçilərin yaddaşı bir cədvəldə birləşir.

- **Xidmət** (salon, klinika, usta, avtoservis): müştəri kartı — ad, telefon, hansı ustaya gedir, son xidmət və tarixi, vacib qeyd (allergiya, üstünlük).
- **Ticarət** (mağaza, onlayn satış): alıcı kartı — telefon, ölçü və ya üstünlük, son alış, ümumi alış məbləği. Instagram-dan yazan alıcı da bura düşür.
- **İctimai iaşə** (kafe, restoran, şirniyyat sexi): daimi qonaq siyahısı — telefon, ad günü, sevimli sifariş, çatdırılma ünvanı.
- **Təhsil** (kurs mərkəzi, repetitor): tələbə kartı — tələbə və valideyn telefonu, qrup, səviyyə, ödəniş vəziyyəti.

**Ölçü:** bazada telefonu və son alış tarixi olan müştərilərin payı.

## 2. Onlayn sifariş və ya rezervasiya

Müştəri zəng etmədən, mesaj yazışmasında itmədən müraciət edir.

- **Xidmət:** onlayn rezervasiya — müştəri boş saatı və ustanı özü seçir, eyni saata iki nəfər yazılmır.
- **Ticarət:** kataloq və sifariş forması — məhsul, say, çatdırılma və ya mağazadan götürmə.
- **İctimai iaşə:** masa rezervasiyası, menyu linki ilə çatdırılma və götürmə sifarişi; sifariş mətbəxə ekranla və ya çapla çatır.
- **Təhsil:** qeydiyyat forması — kurs, qrup saatı, sınaq dərsinə yazılma.

**Ölçü:** onlayn gələn müraciətlərin payı və müraciətə ilk cavab müddəti.

## 3. Ödəniş

Hər ödəniş müştəri kartına bağlanır, borc ayrıca görünür.

- **Xidmət:** ödəniş linki ilə avans; qalan məbləğ kartla, xidmətdən sonra.
- **Ticarət:** kart, köçürmə və ödəniş linki; qapıda ödəniş də qeyd olunur.
- **İctimai iaşə:** masada QR ilə hesab, çatdırılmada onlayn ödəniş.
- **Təhsil:** aylıq ödəniş cədvəli — kim ödəyib, kim gecikib; ödəniş linki valideynə gedir.

**Ölçü:** gecikən ödənişlərin cəmi və nağdsız ödənişlərin payı.

## 4. Xatırlatma və bildiriş

Müştəriyə yazmaq işçinin yadından çıxmağa bağlı olmur.

- **Xidmət:** görüşdən 24 saat və 2 saat əvvəl SMS və ya WhatsApp, təsdiq və vaxtı dəyişmə linki ilə; uzun müddət gəlməyən müştəriyə dəvət.
- **Ticarət:** sifariş statusu (qəbul olundu, yoldadır, çatdı); bitmiş məhsul yenidən gələndə gözləyənlərə xəbər.
- **İctimai iaşə:** rezervasiyadan 2 saat əvvəl təsdiq; ad günü təbriki.
- **Təhsil:** dərs vaxtı dəyişəndə qrupa bildiriş; ödəniş günündən 3 gün əvvəl valideynə xatırlatma.

**Ölçü:** gəlməyən rezervasiyaların sayı və xatırlatmadan sonra qayıdan müştərilər.

## 5. Resurs və anbar uçotu

İnsan, vaxt və mal bir yerdə görünür.

- **Xidmət:** usta qrafiki və iş yükü; sərf materiallarının qalığı.
- **Ticarət:** hər satışda azalan anbar qalığı; minimum həddə düşən məhsullar üçün sifariş siyahısı.
- **İctimai iaşə:** ərzaq qalığı və texnoloji kart — bir porsiyaya nə sərf olunur; silinən ərzağın qeydi.
- **Təhsil:** müəllim yükü, otaq və qrup cədvəli; qruplarda boş yer.

**Ölçü:** mal bitdiyi üçün itən satışlar və işçi doluluğu.

## 6. Hesabat

Rəqəmlər hər həftə eyni gün baxılır və bir qərara çevrilir.

- **Xidmət:** gəlir, usta üzrə doluluq, ən çox sifariş olunan xidmət, qayıtmayan müştərilər.
- **Ticarət:** satış, ən çox və ən az satılan məhsul, marja, uzun müddət satılmayan qalıq.
- **İctimai iaşə:** çek sayı, orta çek, ən çox satılan yemək, ərzaq xərcinin satışa nisbəti.
- **Təhsil:** aktiv tələbə sayı, qrup doluluğu, ödəniş borcu, kursu yarımçıq buraxanlar.

**Ölçü:** hər həftəlik baxışdan sonra qəbul olunan bir konkret qərar.

## Başlamaq üçün

Bir cədvəl (məsələn, paylaşılan Google Sheets) birinci addım üçün kifayətdir. Xüsusi proqram ikinci və ya üçüncü addımda, real ehtiyac görünəndə seçilir — əvvəl yox.
