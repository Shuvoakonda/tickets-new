<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->foreignId('user_id')->nullable()->constrained()->cascadeOnDelete();
            $table->tinyInteger('status')->default(0);
            $table->string('currency', 5)->nullable();
            $table->integer('discount')->nullable();
            $table->integer('discount_code')->nullable();
            $table->integer('subtotal');
            $table->integer('total');
            $table->integer('tax')->nullable();
            $table->json('billing')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('payment_method_title')->nullable();
            $table->string('transaction_id')->nullable();
            $table->timestamp('date_paid')->nullable();
            $table->timestamp('date_completed')->nullable();
            $table->string('refund_amount')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};