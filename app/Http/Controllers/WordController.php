<?php

namespace App\Http\Controllers;

use App\Helper\HelperClass;
use App\Word;
use Request;
use Response;

class WordController extends Controller
{
    public function index()
    {
        $words = Word::orderBy('created_at','desc')->limit(5)->get(['word','meaning']);
        return response::json(['words'=>$words])->setStatusCode(223);
    }

    public function create()
    {
        //
    }

    public function store()
    {
        $word = Request::input('word');
        $meaning = Request::input('meaning');

        try {
            $saveWord = new Word();
            $saveWord->string = HelperClass::generateStringKey();
            $saveWord->word = $word;
            $saveWord->meaning = $meaning;
            $saveWord->lang = 1;
            $saveWord->save();
            return response::json(['type' => 'success', 'message' => trans('main.word_save_success')])->setStatusCode(223, 'success');
        } catch (\Exception $e) {
            return response::json(['type' => 'error', 'message' => trans('main.word_save_error')])->setStatusCode(523, 'error');
        }
    }

    public function show()
    {
        //
    }

    public function edit()
    {
        //
    }

    public function update()
    {
        //
    }

    public function destroy()
    {
        //
    }
}
