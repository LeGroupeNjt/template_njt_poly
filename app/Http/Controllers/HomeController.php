<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //except name action
    }

    public function index(){return view('liste');}
	
    public function ajouter(){return view('ajouter');}
	
    //public function modifier(){return view('modifier');}
}
