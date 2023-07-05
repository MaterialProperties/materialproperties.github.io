const dataMaterial = [
  {
    jenis: "Logam",
    sifat: [
      {
        nama: "Kekuatan dan Kekakuan",
        deskripsi: "Material logam umumnya memiliki kekuatan mekanik yang tinggi dan kekakuan yang baik. Mereka dapat menahan beban yang besar tanpa mengalami deformasi yang signifikan.",
      },
      {
        nama: "Konduktivitas Termal dan Listrik",
        deskripsi: "Logam memiliki konduktivitas termal dan listrik yang tinggi. Ini berarti mereka dapat dengan mudah menghantarkan panas dan listrik. Oleh karena itu, logam sering digunakan dalam aplikasi yang membutuhkan konduktivitas yang baik, seperti kabel listrik dan elemen pemanas.",
      },
      {
        nama: "Duktilitas dan Kecocokan",
        deskripsi: "Logam memiliki sifat duktilitas yang baik, yang berarti mereka dapat diubah bentuk dan ditarik menjadi kawat tanpa patah. Mereka juga memiliki kecocokan yang baik, yang memungkinkan untuk dicetak dan diubah bentuk menggunakan berbagai metode manufaktur.",
      },
      {
        nama: "Kepuasan Plastis",
        deskripsi: "Logam mampu mengalami deformasi plastis, yang berarti mereka dapat berubah bentuk secara permanen tanpa patah saat diberikan tekanan. Ini memungkinkan material logam untuk digunakan dalam pembentukan dan pembentukan yang rumit",
      },
      {
        nama: "Korosif dan Oksidasi"  ,
        deskripsi: "Beberapa logam rentan terhadap korosi atau oksidasi. Namun, beberapa logam seperti aluminium dan stainless steel memiliki ketahanan yang baik terhadap korosi dan oksidasi, terutama jika mereka dilindungi oleh lapisan pelindung seperti oksida yang membentuk pada permukaannya",
      },
      {
        nama: "Magnetisme",
        deskripsi: "Beberapa logam, seperti besi, nikel, dan kobalt, memiliki sifat magnetik. Mereka dapat menarik atau dipengaruhi oleh medan magnet, dan sering digunakan dalam aplikasi seperti pembuatan magnet permanen",
      },
      {
        nama:"Kepadatan",
        deskripsi:"Material logam cenderung memiliki kepadatan yang tinggi, artinya mereka relatif berat. Namun, ada juga beberapa logam dengan kepadatan rendah, seperti aluminium dan magnesium, yang digunakan dalam industri otomotif dan dirgantara untuk mengurangi bobot struktur",
      },
      {
        nama:"Pemuaian Termal",
        deskripsi:"Logam memiliki koefisien pemuaian termal yang relatif tinggi, yang berarti mereka cenderung memuai atau menyusut dengan perubahan suhu. Sifat ini penting untuk dipertimbangkan dalam desain struktural, terutama jika ada perubahan suhu yang signifikan",
      },
    ],
    

  },
  {
    jenis: "Polimer",
    sifat: [
      {
        nama: "Kekuatan dan Kekakuan",
        deskripsi: "Material polimer umumnya memiliki kekuatan mekanik yang lebih rendah dibandingkan dengan logam. Namun, polimer memiliki elastisitas yang baik, sehingga mereka dapat mengalami deformasi elastis dan kembali ke bentuk asal setelah beban diberhentikan.",
      },
      {
        nama: "Ketahanan terhadap Korosif",
        deskripsi: "Beberapa polimer memiliki ketahanan yang baik terhadap korosi dan reaksi kimia lainnya. Ini membuat polimer cocok untuk aplikasi di lingkungan yang agresif atau dalam kontak dengan bahan kimia tertentu.",
      },
      {
        nama: "Ringan dan Tahan Aus",
        deskripsi: "Polimer memiliki kepadatan yang rendah, sehingga mereka lebih ringan daripada logam. Mereka juga dapat memiliki ketahanan yang baik terhadap keausan, terutama ketika digunakan dalam aplikasi gesekan atau tahan aus.",
      },
      {
        nama:"Kelastican",
        deskripsi:"Polimer umumnya memiliki kelastican yang tinggi, yang berarti mereka dapat mengalami deformasi elastis saat diberi beban dan dapat kembali ke bentuk aslinya setelah beban dihilangkan. Ini membuat polimer sangat fleksibel dan dapat ditekuk atau ditarik dengan mudah",
      },
      {
        nama:"Daya tembus gas",
        deskripsi:"Material polimer memiliki kecenderungan untuk memiliki daya tembus gas yang tinggi. Beberapa polimer dapat menjadi bahan penghalang yang baik terhadap gas, sedangkan yang lain dapat memungkinkan gas melalui strukturnya. Hal ini penting dalam aplikasi seperti kemasan makanan atau penghalang gas dalam industri kimia.",
      },
      {
        nama:"Temperatur operasional",
        deskripsi: "Polimer memiliki rentang suhu operasional yang lebih luas dibandingkan dengan logam atau keramik. Beberapa polimer dapat beroperasi dalam suhu tinggi, sementara yang lain memiliki ketahanan yang lebih baik terhadap suhu rendah. Namun, suhu tinggi dapat menyebabkan penurunan sifat mekanik dan degradasi material polimer",
      },
      {
        nama:"Transparansi",
        deskripsi: "Beberapa polimer, seperti polietilen dan polipropilen, memiliki sifat transparan atau translusen, yang membuatnya cocok untuk aplikasi kemasan atau produk yang membutuhkan transparansi",
      },
      {
        nama:"Sifat elektrik",
        deskripsi:"Material polimer dapat memiliki sifat isolator atau konduktor listrik, tergantung pada struktur kimianya. Beberapa polimer dapat menghantarkan listrik dengan baik dan digunakan dalam aplikasi seperti kabel listrik atau elektronik organik sementara polimer lainnya dapat berperan sebagai isolator listrik",
      },
      {
        nama:"Daya serap air",
        deskripsi:"Polimer dapat memiliki daya serap air yang bervariasi. Beberapa polimer dapat menyerap air dengan baik, yang dapat mempengaruhi sifat mekanik dan termal mereka.",
      },
    ],

  },
  {
    jenis: "Keramik",
    sifat: [
      {
        nama: "Kekerasan",
        deskripsi: "Material keramik memiliki kekerasan yang tinggi, yang membuat mereka tahan terhadap goresan dan deformasi plastis. Kekerasan keramik menjadikannya material yang cocok untuk aplikasi yang membutuhkan ketahanan yang tinggi terhadap aus.",
      },
      {
        nama: "Ketahanan terhadap Suhu Tinggi",
        deskripsi: "Keramik memiliki ketahanan yang baik terhadap suhu tinggi. Mereka dapat mempertahankan kekuatan mekanik mereka dan mampu menjaga kestabilan struktural bahkan pada suhu ekstrem.",
      },
      {
        nama: "Isolator Termal dan Listrik",
        deskripsi: "Keramik memiliki sifat isolator termal dan listrik yang baik. Mereka dapat menghambat aliran panas dan listrik, sehingga digunakan dalam aplikasi yang membutuhkan isolasi termal dan listrik, seperti piring pemanas dan isolator listrik.",
      },
      {
        nama:"Kekekalan Dimensi",
        deskripsi:"Material keramik cenderung memiliki kestabilan dimensi yang tinggi. Mereka dapat mempertahankan bentuk dan ukuran mereka dengan baik bahkan dalam suhu tinggi atau lingkungan yang keras",
      },
      {
        nama:"Ketahanan terhadap Korosi",
        deskripsi:"Keramik umumnya memiliki ketahanan yang baik terhadap korosi kimia dan oksidasi. Mereka tidak mudah teroksidasi atau terkorosi oleh lingkungan agresif, seperti asam atau basa kuat",
      },
      {
        nama:"Ringan dan Tahan Aus",
        deskripsi:"Beberapa jenis keramik memiliki kepadatan yang rendah, membuatnya menjadi material yang ringan. Selain itu, beberapa keramik memiliki kekuatan dan ketahanan aus yang tinggi, menjadikannya pilihan yang baik untuk aplikasi yang membutuhkan bahan ringan dan tahan terhadap keausan",
      },
      {
        nama:"Transparansi",
        deskripsi:"Beberapa jenis keramik, seperti aluminium oksida transparan, memiliki sifat transparansi terhadap cahaya. Ini menjadikannya pilihan yang baik untuk aplikasi optik, seperti lensa dan jendela keramik",
      },

    ],
  },
  {
    jenis: "Komposit",
    sifat: [
      {
        nama: "Kekuatan dan Kekakuan",
        deskripsi: "Komposit menggabungkan kekuatan dari dua atau lebih bahan yang berbeda. Mereka memiliki kekuatan dan kekakuan yang tinggi dibandingkan dengan material tunggal. Sifat ini membuat komposit cocok untuk aplikasi yang membutuhkan kekuatan dan kekakuan tambahan, seperti struktur pesawat terbang.",
      },
      {
        nama: "Berat Ringan",
        deskripsi: "Komposit sering memiliki kepadatan yang rendah, karena komponen-komponennya yang ringan. Ini membuat komposit menjadi alternatif yang baik untuk material logam dalam aplikasi di mana penurunan berat adalah faktor penting, seperti industri otomotif dan dirgantara.",
      },
      {
        nama: "Tahan Korosi",
        deskripsi: "Komposit dapat memiliki ketahanan yang baik terhadap korosi. Bahan pengisi atau matriks yang digunakan dalam komposit dapat memberikan perlindungan terhadap kerusakan yang disebabkan oleh korosi atau reaksi kimia lainnya.",
      },
      {
        nama:"Kelastican",
        deskripsi:"Kelastican material komposit dapat bervariasi tergantung pada jenis serat penguat dan matriks yang digunakan. Material komposit dengan serat penguat yang kaku cenderung memiliki kelastican yang lebih rendah dibandingkan dengan material komposit yang menggunakan serat penguat yang lebih fleksibel",
      },
      {
        nama:"Daya Serap Air ",
        deskripsi:"Material komposit seringkali memiliki daya serap air yang lebih rendah daripada material matriksnya. Serat penguat umumnya memiliki daya serap air yang rendah, dan matriks yang digunakan dapat dirancang untuk memiliki daya serap air yang minimal. Hal ini membuat material komposit lebih tahan terhadap degradasi yang disebabkan oleh kelembaban atau paparan lingkungan yang lembap",
      },
      {
        nama:"Kepuasan Thermal",
        deskripsi:"Material komposit dapat memiliki konduktivitas termal yang lebih rendah daripada logam, tergantung pada jenis serat penguat yang digunakan. Hal ini dapat membuat material komposit menjadi pilihan yang baik dalam aplikasi yang memerlukan isolasi termal atau perlindungan terhadap perubahan suhu yang ekstrem	",
      },
      {
        nama:"Ketahanan terhadap Tegangan dan Kekasaran",
        deskripsi:"Material komposit sering memiliki ketahanan yang baik terhadap tegangan dan kekasaran. Serat penguat dapat membantu dalam menyerap energi dan mengurangi retakan dan keretakan yang mungkin terjadi pada material",
      },
      {
        nama:"Ketahanan terhadap Getaran",
        deskripsi:"Material komposit dapat menawarkan ketahanan yang lebih baik terhadap getaran daripada material tunggal. Serat penguat dapat membantu dalam meredam getaran dan meningkatkan ketahanan struktural material komposit",
      
      }

    ],
  },
  {
    jenis: "Kaca",
    sifat: [
      {
        nama:"Transparansi",
        deskripsi:"Salah satu sifat utama kaca adalah transparansinya terhadap cahaya. Kaca biasanya memiliki sifat transparan, yang memungkinkan cahaya melalui bahan ini dengan sedikit atau tanpa hambatan, tergantung pada kejernihan dan ketebalan kaca.",
      },
      {
        nama:"Kekerasan",
        deskripsi:"Kaca memiliki sifat kekerasan yang relatif tinggi. Namun, dibandingkan dengan beberapa bahan lain seperti logam, kaca cenderung lebih mudah pecah dan rentan terhadap goresan.",
      },
      {
        nama:"Ketahanan terhadap korosi",
        deskripsi:"Kaca adalah bahan yang tidak reaktif terhadap banyak zat kimia. Karena itu, kaca biasanya tahan terhadap korosi oleh bahan kimia, seperti air, asam, atau basa. Namun, beberapa jenis kaca tertentu dapat bereaksi dengan bahan kimia tertentu.",
      },
      {
        nama:"Konduktivitas termal",
        deskripsi:"Kaca memiliki konduktivitas termal yang rendah. Ini berarti kaca tidak menghantarkan panas dengan efisien dan memiliki kemampuan insulasi termal yang baik. Karena itu, kaca sering digunakan dalam aplikasi yang membutuhkan isolasi termal, seperti jendela dan panel isolasi.",
      },
      {
        nama:"Ketahanan terhadap suhu tinggi",
        deskripsi:"Kaca biasanya dapat menahan suhu tinggi tanpa meleleh atau berubah bentuk. Namun, beberapa jenis kaca memiliki batasan suhu tertentu di mana mereka dapat melunak atau pecah jika terkena suhu ekstrim.",
      },
      {
        nama:"Keawetan dimensi",
        deskripsi:"Kaca memiliki keawetan dimensi yang baik, artinya kaca cenderung mempertahankan bentuk dan dimensinya seiring berjalannya waktu. Ini membuatnya menjadi pilihan yang baik dalam aplikasi di mana stabilitas dimensi sangat penting, seperti dalam pembuatan peralatan laboratorium atau komponen optik.",
      },
      {
        nama:"Transmisi suara",
        deskripsi:"Kaca memiliki sifat transmisi suara yang relatif tinggi. Ini berarti suara dapat dengan mudah melewati kaca tanpa banyak hambatan. Namun, kaca dapat dikombinasikan dengan lapisan atau struktur tambahan untuk meningkatkan isolasi suara.",
      },
      {
        nama:"Kehalusan permukaan",
        deskripsi:"Kaca biasanya memiliki permukaan yang halus dan rata. Hal ini membuatnya cocok untuk aplikasi yang membutuhkan permukaan yang jernih, seperti dalam industri optik atau elektronik.",
      },
      {
        nama:" Kerapatan",
        deskripsi:"Kaca memiliki kerapatan yang cukup tinggi. Namun, jenis dan komposisi kaca tertentu dapat mempengaruhi kerapatan yang spesifik.",
      }

    ],
  },
  {
    jenis: "Karbon",
    sifat: [
      {
        nama:"Ketahanan terhadap suhu tinggi",
        deskripsi:"Karbon memiliki ketahanan yang sangat baik terhadap suhu tinggi. Ini membuatnya ideal untuk digunakan dalam aplikasi yang melibatkan suhu ekstrim, seperti dalam industri aerospace atau pembuatan perlengkapan suhu tinggi.",
      },
      {
        nama:"Kekerasan ",
        deskripsi:"Bahan karbon dalam beberapa bentuknya, seperti intan, memiliki kekerasan yang sangat tinggi. Intan adalah salah satu bahan paling keras yang diketahui. Namun, sifat kekerasan ini tergantung pada struktur kristal karbon yang terbentuk.",
      },
      {
        nama:"Konduktivitas termal",
        deskripsi:"Beberapa bentuk karbon, seperti grafit, memiliki konduktivitas termal yang baik. Ini berarti mereka mampu menghantarkan panas dengan efisien. Sebagai contoh, grafit digunakan dalam industri elektronik sebagai bahan pendingin panas pada komponen yang memerlukan pendinginan.",
      },
      {
        nama:"Konduktivitas listrik",
        deskripsi:"Beberapa bentuk karbon, seperti grafit, juga memiliki konduktivitas listrik yang baik. Ini membuatnya berguna dalam berbagai aplikasi listrik, termasuk dalam pembuatan elektroda, baterai, dan komponen elektronik lainnya.",
      },
      {
        nama:"Kemampuan penyerapan",
        deskripsi:"Karbon memiliki kemampuan penyerapan yang baik terhadap berbagai zat kimia dan gas. Aktif karbon sering digunakan dalam filter atau adsorben untuk menghilangkan zat-zat berbahaya atau mengurangi bau.",
      },
      {
        nama:"Ketahanan terhadap korosi",
        deskripsi:"Karbon dalam bentuk grafit sangat tahan terhadap korosi. Namun, ketika karbon bereaksi dengan oksigen dalam keadaan panas, seperti pada proses oksidasi, ia dapat membentuk karbon dioksida.",
      },
      {
        nama:"Kelenturan dan kekuatan",
        deskripsi:"Beberapa bentuk karbon, seperti serat karbon, memiliki kekuatan yang sangat tinggi dan ketangguhan yang baik. Serat karbon sering digunakan dalam industri otomotif, penerbangan, dan konstruksi untuk memperkuat bahan lain dan meningkatkan kekuatan strukturalnya.",
      },
      {
        nama:"Ringannya",
        deskripsi:"Karbon memiliki massa jenis yang rendah, sehingga material yang terbuat dari karbon cenderung ringan. Ini menjadikannya pilihan yang baik untuk aplikasi di mana kekuatan dan bobot yang rendah sangat diinginkan, seperti dalam pembuatan komposit serat karbon.",
      }
    ],
  },
  {
    jenis: "Kayu",
    sifat: [
      {
        nama:"Kekuatan",
        deskripsi:"Kayu memiliki kekuatan yang baik dalam perbandingan beratnya. Beberapa jenis kayu seperti ek dan kayu keras lainnya memiliki kekuatan yang sangat tinggi. Namun, kekuatan kayu dapat bervariasi tergantung pada jenis kayu dan kondisinya.",
      },
      {
        nama:"Kekakuan",
        deskripsi:"Kayu memiliki kekakuan yang baik, artinya kayu memiliki kemampuan untuk menahan beban tanpa melentur secara signifikan. Kekakuan kayu memungkinkan penggunaan kayu dalam berbagai aplikasi struktural.",
      },
      {
        nama:"Kerentanan terhadap kelembaban",
        deskripsi:"Kayu adalah material yang rentan terhadap perubahan kelembaban. Kayu dapat menyerap kelembaban dari lingkungan sekitarnya, yang dapat menyebabkan perubahan dimensi dan bentuk kayu. Hal ini perlu diperhitungkan dalam desain dan konstruksi dengan kayu.",
      },
      {
        nama:"Kehalusan permukaan",
        deskripsi:"Kayu memiliki permukaan yang alami dan kehalusan yang berbeda-beda tergantung pada jenis kayu dan metode pengolahannya. Permukaan kayu dapat dihaluskan dan dipoles untuk mencapai tampilan dan sentuhan yang diinginkan.",
      },
      {
        nama:"Sifat termal",
        deskripsi:"Kayu adalah isolator termal yang baik. Ini berarti kayu memiliki kecenderungan untuk menjaga suhu relatif konstan, baik dalam cuaca panas maupun dingin. Sifat termal kayu menjadikannya pilihan yang baik untuk penggunaan dalam konstruksi bangunan.",
      },
      {
        nama:"Sifat akustik",
        deskripsi:"Kayu memiliki sifat akustik yang menarik. Kayu dapat meredam dan menghantarkan suara dengan baik, sehingga sering digunakan dalam pembuatan instrumen musik dan ruang akustik.",
      },
      {
        nama:"Ketahanan terhadap serangan organisme",
        deskripsi:"Kayu memiliki sifat alami yang tahan terhadap serangan hama dan mikroorganisme seperti serangga, jamur, dan rayap. Namun, beberapa jenis kayu lebih tahan terhadap serangan ini daripada yang lain.",
      },
    ],
  },
  {
    jenis: "Tekstil",
    sifat: [
      {
        nama:"Ketahanan dan Kekuatan",
        deskripsi:"Material tekstil dapat memiliki tingkat ketahanan dan kekuatan yang berbeda tergantung pada jenis serat dan konstruksi tekstil. Beberapa serat seperti serat kevlar memiliki kekuatan tarik yang tinggi, sementara serat seperti kapas lebih lemah. Namun, ketahanan dan kekuatan tekstil dapat ditingkatkan melalui penggunaan teknik pemintalan, penggabungan serat, atau penambahan lapisan pelindung.",
      },
      {
        nama:"Elastisitas",
        deskripsi:"Beberapa serat tekstil memiliki sifat elastis, yang memungkinkan tekstil untuk meregang dan kembali ke bentuk asalnya setelah ditarik atau ditekan. Contoh serat yang elastis adalah serat spandex yang sering digunakan dalam pakaian olahraga atau pakaian yang membutuhkan kemampuan pemulihan elastis yang baik.",
      },
      {
        nama:"Absorpsi dan Kelembaban",
        deskripsi:"Material tekstil memiliki kemampuan untuk menyerap dan melepaskan kelembaban. Beberapa serat seperti kapas memiliki daya serap yang tinggi dan mampu menyerap kelembaban dari tubuh. Di sisi lain, serat seperti polyester cenderung memiliki daya serap yang rendah dan lebih cenderung memindahkan kelembaban ke permukaan untuk pengeringan lebih cepat.",
      },
      {
        nama:"Ketahanan Terhadap Api",
        deskripsi:"Beberapa material tekstil dapat memiliki sifat ketahanan terhadap api yang tinggi. Misalnya, serat seperti serat nomex atau serat kevlar sering digunakan dalam pakaian pelindung atau produk yang membutuhkan ketahanan terhadap api.",
      },
      {
        nama:"Kekakuan atau Kekelenturan",
        deskripsi:"Material tekstil dapat memiliki tingkat kekakuan atau kekelenturan yang berbeda. Beberapa tekstil seperti linen atau denim cenderung lebih kaku, sedangkan tekstil seperti satin atau jersey cenderung lebih lembut dan fleksibel.",
      },
      {
        nama:"Sifat Termal",
        deskripsi:"Material tekstil dapat memiliki sifat termal yang berbeda tergantung pada jenis serat. Beberapa serat dapat memberikan isolasi termal yang baik, seperti wol atau serat polar fleece, sementara serat lain seperti polyester dapat memiliki konduktivitas termal yang lebih tinggi.",
      },
      {
        nama:"Sifat Kebersihan dan Keawetan Warna",
        deskripsi:"Beberapa tekstil memiliki kemampuan untuk menjaga kebersihan dan warna yang tahan lama. Beberapa serat seperti polyester atau nilon memiliki sifat tahan noda dan lebih mudah dirawat, sedangkan serat lain seperti sutra atau linen mungkin lebih rentan terhadap noda atau perubahan warna.",
      },
  
    ],
  }
]

function searchBox() {
  const search = document.getElementById("search");
  const dataSection = document.getElementById("data_section");

  const searchValue = search.value.toLowerCase();
  const filteredData = dataMaterial.filter((item) => {
    return item.jenis.toLowerCase().includes(searchValue);
  });

  dataSection.innerHTML = "";
  if (filteredData.length === 0) {
    dataSection.innerHTML = "<li>Tidak ada hasil yang ditemukan.</li>";
  } else {
    filteredData.forEach((item) => {
      const listItem = document.createElement("li");

      const jenisMaterial = document.createElement("h3");
      jenisMaterial.textContent = item.jenis;
      listItem.appendChild(jenisMaterial);

      item.sifat.forEach((sifat) => {
        const namaSifat = document.createElement("h4");
        namaSifat.textContent = sifat.nama;
        listItem.appendChild(namaSifat);

        const deskripsiSifat = document.createElement("p");
        deskripsiSifat.textContent = sifat.deskripsi;
        listItem.appendChild(deskripsiSifat);
      });

      dataSection.appendChild(listItem);
    });
  }
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchBox);

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function () {
  const search = document.getElementById("search");
  const dataSection = document.getElementById("data_section");

  search.value = "";
  dataSection.innerHTML = "";
});

const search = document.getElementById("search");
search.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBox();
  }});
const scrollLinks = document.querySelectorAll('a[href^="#"]');

function handleScrollClick(event) {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute("href").slice(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
scrollLinks.forEach(link => {
  link.addEventListener("click", handleScrollClick);
});
