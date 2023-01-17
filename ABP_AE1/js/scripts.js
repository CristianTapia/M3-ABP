var region =  ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", 
                "Metropolitana", "O'Higgins", "Maule", "Ñuble", "Biobío", "Araucanía", "Los Ríos",
                "Los Lagos", "Aysén", "Magallanes"];
var atractivos = ["Morro de Arica", "Zofri", "San Pedro de Atacama", "Bahía Inglesa", "Faro", 
                "Cerros de Valparaíso", "Cajón del Maipo", "Parcelas", "Cascadas", "Iglesias", "Parques",
                "Parques", "Ríos", "Lagos", "Más parques", "Torres del Paine"];
var images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Parinacota_volcano.jpg/375px-Parinacota_volcano.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Iquique_night_skyline.jpg/399px-Iquique_night_skyline.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Volcan_Lascar.jpg/375px-Volcan_Lascar.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ValledeCopiapo.jpg/375px-ValledeCopiapo.jpg",
            "https://www.bcn.cl/siit/siit/imagenes/iv_laserena.jpg/image_mini",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Renaca4.jpg/375px-Renaca4.jpg",
            "https://viajantes.cl/wp-content/uploads/viajantes-santiago.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Vi%C3%B1a_Montes_%2820348984418%29.jpg/375px-Vi%C3%B1a_Montes_%2820348984418%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nevados_del_longavi.JPG/375px-Nevados_del_longavi.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/R%C3%ADo_%C3%91uble%2C_regi%C3%B3n_de_%C3%91uble%2C_Chile.jpg/375px-R%C3%ADo_%C3%91uble%2C_regi%C3%B3n_de_%C3%91uble%2C_Chile.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chenqueco.JPG/375px-Chenqueco.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Araucaria_araucana_-_Parque_Nacional_Conguill%C3%ADo_por_lautaroj_-_001.jpg/375px-Araucaria_araucana_-_Parque_Nacional_Conguill%C3%ADo_por_lautaroj_-_001.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Castillo_de_Niebla1.JPG/375px-Castillo_de_Niebla1.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Puente_de_R%C3%ADo_Puelo.jpg/450px-Puente_de_R%C3%ADo_Puelo.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/.00_3210_Puerto_Chacabuco_-_Chile.jpg/375px-.00_3210_Puerto_Chacabuco_-_Chile.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Glaciar_Serrano%2C_Laguna_Serrano%2C_a_4_horas_de_Puerto_Natales%2C_Magallanes%2C_sur_de_Chile.jpg/375px-Glaciar_Serrano%2C_Laguna_Serrano%2C_a_4_horas_de_Puerto_Natales%2C_Magallanes%2C_sur_de_Chile.jpg"]

function regiones(valor) {
    let show = document.getElementById("box")
    show.style.display = "flex";
    show.style.justifyContent = "center";
    document.getElementById("pictures").setAttribute("src", images[valor]);
    document.getElementById("name").innerText = "Región: " + region[valor];
    document.getElementById("info").innerText = "Atractivos: " + atractivos[valor];
}
function outMap() {
    document.getElementById("box").style.display = "none";
}