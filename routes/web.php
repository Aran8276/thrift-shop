<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware(['auth', 'verified'])->name('welcome');

Route::get('/shop', function () {
    return Inertia::render('Shop');
})->middleware(['auth', 'verified'])->name('shop');

Route::get('/cart', function () {
    return Inertia::render('Cart');
})->middleware(['auth', 'verified'])->name('cart');

Route::get('/payment', function () {
    return Inertia::render('Payment');
})->middleware(['auth', 'verified'])->name('payment');

Route::get('/product/{id}', function ($id) {
    return Inertia::render('Product', ['pakianId' => $id]);
})->middleware(['auth', 'verified'])->name('product');

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/AdminDashboard');
})->middleware(['auth', 'verified'])->name('adminDashboard');

Route::get('/admin/product', function () {
    return Inertia::render('Admin/AdminProduct');
})->middleware(['auth', 'verified'])->name('adminProduct');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
