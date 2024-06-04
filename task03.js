function seleksiNilai(nilaiAwal, nilaiAkhir, dataNilai) {
  if (nilaiAwal < nilaiAkhir) {
  if (dataNilai.length <= 5) {
  return "jumlah angka dalam data array harus lebih dari 5";
    }
      let array = [];
           for (let i = 0; i < dataNilai.length; i++) {
                if (nilaiAwal <= dataNilai[i] && nilaiAkhir >= dataNilai[i]) {
          
          array.push(dataNilai[i]);
          array.sort();
        }
      }
           if (array.length == 0) {
        return('nilai tidak ditemukan')
      }
      return array;
  } else {
    return "nilai akhir harus lebih besar dari nilai awal";
  }
}
const hasil = seleksiNilai(5, 20, [2,25,4,14,17,30,8]);
const hasil2 = seleksiNilai(15, 3, [2,25,4,14,17,30,8]);
const hasil3 = seleksiNilai(4, 17, [2,25,4]);
const hasil4 = seleksiNilai(5, 17, [2,25,4,1,30,18]);
console.log(hasil);
console.log(hasil2);
console.log(hasil3);
console.log(hasil4);