<template>
    <div class="adopciones">
        <!-- imagenes de perros-->
   <nav class="container bs-teal rounded">
        <div class="container py-5">
          <marquee><h1>Adopciones..  </h1></marquee>
        </div>
            <!-- primer perro -->
        <div class="row">
            <div class= "col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Pecas</h5>
                        <img src=/images/perro200.jpg width="100%"> <br><br>
                        <p>macho cachorro, su madre murio :(</p>
                    </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-outline-success"><a href="index.html">Adoptalo ya</a></button>      
                    
                   
                </div>
            </div>
        </div>
         <!-- segundo  perro -->
            
        <div class= "col-sm-4">
            <div class="card">
                <div class="card-body">
                        <h5 class="card-title">Canela</h5>
                        <img src=/images/perro201.jpg width="100%"> <br><br>
                        <p>Hembra cachorro, fue rescatada de maltrato animal.</p>
                    </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-outline-success"><a href="index.html">Adoptalo ya</a></button>     
            </div>
            </div>
        </div>
          
        <div class= "col-sm-4">
            <div class="card">
                <div class="card-body">
                        <h5 class="card-title">Machu pichu</h5>
                        <img src=/images/perro202.jpg width="100%"><br><br>
                        <p>Macho cachorro, fue encontrado en la carretera.</p>
                    </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-outline-success"><a href="index.html">Adoptalo ya</a></button>
            </div>
            </div>
        </div>

        </div>
      </section>

   </nav>
   <nav class="container bs-teal rounded">
    <div class="container py-5">
    </div>
        <!-- primer perro de la segunda fila-->
    <div class="row" with=75%>
        <div class= "col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Almendra</h5>
                    <img src=/images/perro203.jpg width="100%"> <br><br>
                    <p>Hembra adulto, nunca fue agresiva.</p>
                </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-success"><a href="index.html">Adoptalo ya</a></button>
            </div>
        </div>
    </div>
     <!-- segundo  perro -->
        
    <div class= "col-sm-4">
        <div class="card">
            <div class="card-body">
                    <h5 class="card-title">Blancox</h5>
                    <img src=/images/perro204.jpg width="100%"> <br><br>
                    <p>Macho adulto, perfecta compañia.</p>
                </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-success"><a href="index.html">Adoptalo ya</a></button>
        </div>
        </div>
    </div>
      
    <div class= "col-sm-4">
        <div class="card">
            <div class="card-body">
                    <h5 class="card-title">Hueso</h5>
                    <img src=/images/perro205.jpg width="100%"> <br> <br>
                    <p>Macho adulto, casi muere por desnutrición.</p>
                </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-success"><a href="index.html">Adoptalo ya</a></button>
        </div>
        </div>
    </div>

    </div>
  </section>

</nav>
<br> <br>
    </div>
</template>


<script>
export default {
  name: 'Adopciones',
  props: {
    msg: String
  }
}
</script>