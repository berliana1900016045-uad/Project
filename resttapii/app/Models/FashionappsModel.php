<?php namespace App\Models;

use CodeIgniter\Model;

class FashionappsModel extends Model
{
    protected $table = 'admin';
    protected $primaryKey = 'id';
    protected $allowedFields = ['nama_produk','kode_produk','merek','ukuran/size','warna','bahan_produk', 
    'asal_produk', 'dikirim_dari', 'deskripsi_produk','harga_produk'];

    public function ubahData($data, $id) {
        return $this->db->table($this->table)->update($data);
    }
    public function hapusData($id) {
        return $this->db->table($this->table)->delete($data);
    }
}