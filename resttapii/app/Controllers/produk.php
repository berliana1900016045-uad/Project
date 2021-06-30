<?php namespace App\Controllers;
 
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\FashionappsModel;
 
class produk extends ResourceController
{
    use ResponseTrait;
    // get all product
    public function index()
    {
        $model = new FashionappsModel();
        $data = $model->findAll();
        return $this->respond($data);
    }
 
    // get single product
    public function show($id = null)
    {
        $model = new FashionappsModel();
        $data = $model->getWhere(['id' => $id])->getResult();
        if($data){
            return $this->respond($data);
        }else{
            return $this->failNotFound('No Data Found with id '.$id);
        }
    }
 
    // create a product
    public function create()
    {
        $model = new FashionappsModel();
        $data = [
            'nama_produk'       => $this->request->getVar('nama_produk'),
            'kode_produk'       => $this->request->getVar('kode_produk'),
            'merek'             => $this->request->getVar('merek'),
            'ukuran/size'       => $this->request->getVar('ukuran/size'),
            'warna'             => $this->request->getVar('warna'),
            'bahan_produk'      => $this->request->getVar('bahan_produk'),
            'asal_produk'       => $this->request->getVar('asal_produk'),
            'dikirim_dari'      => $this->request->getVar('dikirim_darii'),
            'deskripsi_produk'  => $this->request->getVar('deskripsi_produk'),
            'harga_produk'      => $this->request->getVar('harga_produk'),
        ];
        $model->insert($data);
        $response = [
            'status'   => 201,
            'error'    => null,
            'messages' => [
                'success' => 'Data Saved'
            ]
        ];
        return $this->respondCreated($response);
    }

 
    // update product
    public function update($id = 'nama_produk', $data = null)
    {
        $model = new FashionappsModel();
        $input = $this->request->getRawInput();
        $data = [
            'nama_produk' => $input['nama_produk'],
            'kode_produk' => $input['kode_produk'],
            'merek' => $input['merek'],
            'ukuran/size' => $input['ukuran/size'],
            'warna' => $input['warna'],
            'bahan_produk' => $input['bahan_produk'],
            'asal_produk' => $input['asal_produk'],
            'dikirim_dari' => $input['dikirim_dari'],
            'deskripsi_produk' => $input['deskripsi_produk'],
            'harga_produk' => $input['harga_produk'],
        ];
        $model->update($id, $data);
        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Data Updated'
            ]
        ];
        return $this->respond($response);
    }
 
    // delete product
    public function delete($id = 'nama_produk')
    {
        $model = new FashionappsModel();
        $data = $model->find($id);
        if($data){
            $model->delete($id);
            $response = [
                'status'   => 200,
                'error'    => null,
                'messages' => [
                    'success' => 'Data Deleted'
                ]
            ];
            return $this->respondDeleted($response);
        }else{
            return $this->failNotFound('No Data Found with id '.$id);
        }
         
    }
 
}