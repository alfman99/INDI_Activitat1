#version 330 core

out vec4 FragColor;
in vec4 vertex_color;

uniform float transparenciaLoc;

void main() {
    vec4 aux = vertex_color;
    aux.r *= transparenciaLoc;
    aux.g *= transparenciaLoc;
    aux.b *= transparenciaLoc;
    FragColor = aux;
}

