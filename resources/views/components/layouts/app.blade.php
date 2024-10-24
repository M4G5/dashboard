<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Sistema - {{ $title ?? '' }}</title>

        @vite('resources/css/app.css')

        @vite('resources/js/functions.js')
        @vite('resources/js/components/nav.js')

    </head>
    <body class="bg-gray-200/60">        
        <div class="min-h-screen flex flex-row">
            <x-layouts.sidebar />
            <div class="flex-1 flex flex-col">
                <x-layouts.topnav />
                <x-layouts.main />
            </div>
        </div>

    </body>
</html>
