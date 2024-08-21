<header>
    <div class="bg-white h-14 border-l-2 border-b-2 flex justify-between items-center pl-4 pr-5">
        <div>
            <i class="fa-solid fa-bars fa-xl md:hidden block"></i>
            <input type="text" class="bg-gray-200 p-2 rounded-xl md:block hidden" placeholder="Search here...">
        </div>
        <div class="flex items-center gap-5">
            {{-- MENU ICONOS --}}
            <div class="flex gap-6">
                <i class="fa-regular fa-moon"></i>
                <i class="fa-regular fa-calendar"></i>
                <i class="fa-regular fa-envelope"></i>
                <i class="fa-regular fa-bell"></i>
            </div>
            {{-- END MENU ICONOS --}}
            <div class="relative flex">
                <div class="flex items-center gap-2 cursor-pointer btn-">
                    <img src="{{ asset('images/group.png') }}" alt="User profile picture" class="w-10">
                    <i class="fa-solid fa-chevron-down fa-xs"></i>
                </div>
                {{-- SUBMENU PERFIL --}}
                <div class="absolute top-12 right-0 bg-white rounded-md shadow-lg w-48" role="menu"
                    aria-labelledby="profileMenu">
                    <div class="flex gap-3 p-2 items-center border-dashed border-b-[1px] border-b-gray-400">
                        <div class="w-10 ml-2">
                            <img src="{{ asset('images/group.png') }}" alt="Profile picture">
                        </div>
                        <div class="flex flex-col">
                            <span class="font-semibold">Miguel</span>
                            <p>Admin</p>
                        </div>
                    </div>
                    <div class="hover:bg-gray-200/70 px-4 py-1 mt-1 cursor-pointer">
                        <div class="flex items-center gap-x-2">
                            <i class="fa-regular fa-user fa-sm"></i>
                            <a href="#" class="text-gray-900">
                                Perfil
                            </a>
                        </div>
                    </div>
                    <div class="hover:bg-gray-200/70 px-4 py-2 cursor-pointer">
                        <div class="flex items-center gap-x-2">
                            <i class="fa-solid fa-gear fa-sm"></i>
                            <a href="#" class="text-gray-900">
                                Configuracion
                            </a>
                        </div>
                    </div>
                    <div class="hover:bg-gray-200/70 px-4 py-2 cursor-pointer">
                        <div class="flex items-center gap-x-2">
                            <i class="fa-solid fa-arrow-right-from-bracket fa-sm"></i>
                            <a href="#" class="text-gray-900">
                                Salir
                            </a>
                        </div>
                    </div>
                </div>
                {{-- END MENU PERFIL --}}
            </div>
        </div>
    </div>
</header>
