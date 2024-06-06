function seleksiNilai(nilaiAwal, nilaiAkhir, dataNilai) {
    if (nilaiAwal >= nilaiAkhir) {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
      return;
  }

  if (dataNilai.length <= 5) {
      console.log("Jumlah angka dalam dataNilai harus lebih dari 5");
      return;
  }
    let dataFilter = [];
  for (let i = 0; i < dataNilai.length; i++) {
      if (dataNilai[i] >= nilaiAwal && dataNilai[i] <= nilaiAkhir) {
          dataFilter = [...dataFilter, dataNilai[i]]
      }
  }
  
  for (let i = 0; i < dataFilter.length - 1; i++) {
      for (let j = 0; j < dataFilter.length - 1 - i; j++) {
          if (dataFilter[j] > dataFilter[j + 1]) {
              let temp = dataFilter[j];
              dataFilter[j] = dataFilter[j + 1];
              dataFilter[j + 1] = temp;
          }
      }
  }

  if (dataFilter.length > 0) {
      console.log("Output:", dataFilter);
  } else {
      console.log("Nilai tidak ditemukan");
  }
}

const dataNilai = []

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(4, 17, [2, 25, 4])
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
