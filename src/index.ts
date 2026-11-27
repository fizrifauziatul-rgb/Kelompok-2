// APLIKASI RESERVASI TIKET KONSER
// PROJECT UAS SEMESTER 1
import * as readline from 'readline';

// TIPE DATA  DAN KONSTANTA
type Kategori= "VIP" | "FESTIVAL" | "REGULER"

interface Reservasi {
  id: string;
  namaPemesan: string;
  kategoriTiket: Kategori;
  jumlahTiket: number;
  hargaSatuan: number;
  totalBayar: number;
  sudahDibayar: boolean;
}

const HARGA_VIP = 300000;
const HARGA_FESTIVAL = 200000;
const HARGA_REGULER = 100000;
const BATAS_DISKON_ROMBONGAN = 5;
const PERSEN_DISKON = 10;

// DATA AWAL
function muatDataAwal(): void {
  const dataAwal: [string, string, Kategori, number, boolean][] = [
    ["Raykhan", "Cooltura", "VIP", 2, true],
    ["Sahid", "Cooltura", "FESTIVAL",5, true],
    ["Fizri", "Pestapora", "REGULER", 3, false],
    ["Hafizh", "Pestapora", "VIP", 1, true],
    ["Nnael","Dprfestival", "FESTIVAL", 4, false],
  ];
  // Ubah setiap baris menjadi objek ReservaFESTIVALsi lalu simpan ke array
  for (const [nama, konser, kategori, jumlah, lunas] of dataAwal) {
    const harga: number = hargaPerKategori(kategori); 
    daftarReservasi.push({
      id: buatIdUnik(),
      namaPemesan: nama,
      namaKonser: konser,
      kategoriTiket: kategori,
      jumlahTiket: jumlah,
      hargaSatuan: harga,
      totalBayar: hitungTotalBayar(harga, jumlah),
      sudahDibayar: lunas,
    });
  }
}

// MENU UTAMA
function tampilkanMenu(): void {
  console.log("\n");
  tampilkanGaris();
  console.log("   RESERVASI TIKET KONSER");
  tampilkanGaris();
  console.log("   1. Tambah reservasi");
  console.log("   2. Tampilkan semua reservasi");
  console.log("   3. Lihat detail reservasi (berdasarkan ID)");
  console.log("   4. Ubah reservasi");
  console.log("   5. Hapus reservasi");
  console.log("   6. Cari reservasi");
  console.log("   0. Keluar");
  tampilkanGaris();
}

async function jalankanMenu(): Promise<void> {
  let selesai: boolean = false; // penanda kapan perulangan berhenti
  // Ulangi menu selama pengguna belum memilih keluar
  while (!selesai) {
    tampilkanMenu();
    const pilihan: string = (await tanya("Pilih menu [0-6]: ")).trim();
    // Jalankan fitur sesuai nomor yang dipilih
    switch (pilihan) {
      case "1":
        await tambahReservasi();
        break;
      case "2":
        tampilkanSemua();
        break;
      case "3":
        await lihatDetail();
        break;
      case "4":
        await ubahReservasi();
        break;
      case "5":
        await hapusReservasi();
        break;
      case "6":
        await cariReservasi();
        break;
      case "0":
        selesai = true; // hentikan perulangan menu
        console.log("\nTerima kasih telah menggunakan aplikasi ini.");
        break;
      default:
        console.log("[!] Pilihan tidak valid. Masukkan angka 0 sampai 6.");
        break;
    }
  }
  pembaca.close(); // tutup pembaca input agar program benar-benar berhenti
}