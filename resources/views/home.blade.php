@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <add-word></add-word>
            </div>
            <div class="col-md-4">
                <words></words>
            </div>
            <div class="col-md-4">
                <question-answer></question-answer>
            </div>
        </div>
    </div>
@endsection
