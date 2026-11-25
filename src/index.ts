// APLIKASI RESERVASI TIKET KONSER
import * as readline from 'readline';

// TIPE DATA  DAN KONSTANTA
type Kategory = "VIP" | "FESSTIVAL" | "REGULER"

interface Reservasi {
  id: string;
  namaPemesan: string;
  kategoriTiket: Kategory;
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

