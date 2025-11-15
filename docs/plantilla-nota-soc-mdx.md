# Plantilla de notas de SOC y ciberseguridad (Markdown/MDX)

Esta plantilla está pensada para crear notas técnicas de SOC y ciberseguridad de forma rápida y consistente.  
La idea es que cada nota sea:

- Fácil de leer para reclutadores y técnicos.
- Reutilizable para laboratorios, scripts y pequeños proyectos.
- Compatible con el sistema de contenido del portfolio (Markdown/MDX).

---

## 🧩 Estructura de la nota

Cada nota utiliza una estructura estándar con secciones claras:

1. **Contexto / Objetivo de la nota**  
   Qué estás documentando (lab, script, proyecto…) y qué quieres conseguir.

2. **Entorno y herramientas**  
   SO, versiones, herramientas principales (Nmap, Zeek, Wazuh, Python, etc.).

3. **Pasos realizados / Comandos importantes**  
   Lista ordenada de pasos, con bloques de código para los comandos clave.

4. **Resultados / Evidencias**  
   Salidas importantes, capturas, hallazgos principales.

5. **Análisis / Lecciones aprendidas**  
   Qué has aprendido, qué ha salido bien/mal, riesgos detectados, etc.

6. **Próximos pasos / Ideas futuras**  
   Cosas que quieres mejorar, variantes del lab, nuevas pruebas.

7. **Referencias**  
   Enlaces a documentación oficial, repos, posts útiles, etc.

---

## 📝 Ejemplo de plantilla base

```md
---
title: "Título de la nota"
date: "2025-01-01"
tags: ["SOC", "Blue Team", "Nmap"]
repo: "https://github.com/usuario/proyecto"
---

## Contexto / objetivo de la nota

Breve descripción del laboratorio, script o proyecto.  
Explica en 2–3 frases qué estás haciendo y por qué es interesante para un SOC / Blue Team.

## Entorno y herramientas

- SO: Kali Linux 2024.x
- Herramientas: Nmap, Python, etc.
- Otros: docker, máquina víctima, etc.

## Pasos realizados / comandos importantes

1. Paso 1: descripción corta.
   ```bash
   comando --importante
