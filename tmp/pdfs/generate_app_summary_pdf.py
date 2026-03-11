from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUTPUT_PATH = Path(r"C:\Users\rober\dev\mi-landing-page\output\pdf\resumen-app-robbe360-es.pdf")


TITLE = "Resumen de la app: Robbe360"
SUBTITLE = "Basado solo en evidencia del repo | 11 mar 2026"

WHAT_IT_IS = (
    "Robbe360 es una web de marca personal construida con Next.js que presenta "
    "los servicios, credenciales y casos de Roberto Berrendo Eguino. Reúne una "
    "home comercial, un blog técnico, una sección de proyectos/labs IA y una "
    "ruta creativa de música y poesía."
)

WHO_ITS_FOR = (
    "Persona principal: dueño/a de negocio local o profesional que necesita una "
    "web clara, CTA directo a WhatsApp y, en algunos casos, automatización "
    "ligera o validación rápida de producto."
)

FEATURES = [
    "Expone packs cerrados con precio, encaje y CTA a WhatsApp o Google Calendar.",
    "Muestra casos, credenciales y prueba social, incluyendo XEMOS y Teleco Games.",
    "Publica un blog técnico con posts reales y posts automatizados por franjas.",
    "Incluye una ruta de proyectos con referencias, demos y labs de video, voz y TTS.",
    "Mantiene una ruta creativa de música/poesía con cadencia diaria en horario de España.",
    "Genera capa SEO/PWA con metadata, JSON-LD, robots, sitemap, manifest y analítica.",
]

ARCHITECTURE = [
    "Frontend: Next.js 15 App Router + React 19 + Tailwind; rutas en src/app.",
    "Contenido: datos locales en src/app/home-data.ts y src/data/*.ts/*.json.",
    "Fechas y rotación: src/lib/madrid-time.ts ajusta contenido automatizado a Europe/Madrid.",
    "Cliente dinámico: next/dynamic carga Instagram, archivo de noticias y labs IA en navegador.",
    "Servicios: /api/xai/video, /api/xai/tts y /api/xai/realtime/token hacen proxy a xAI con XAI_API_KEY.",
    "SEO y operación: site-config.ts centraliza metadata/schema; layout.tsx carga AdSense, Vercel Analytics y Speed Insights.",
    "Base de datos, auth y CMS externo: Not found in repo.",
]

RUN_STEPS = [
    "npm install",
    "Crear .env.local con NEXT_PUBLIC_SITE_URL=http://localhost:3000",
    "Opcional para los labs IA: añadir XAI_API_KEY=... en .env.local",
    "npm run dev y abrir http://localhost:3000",
]


PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN = 28
GAP = 14
HEADER_HEIGHT = 74
LEFT_COL_WIDTH = 255
RIGHT_COL_WIDTH = PAGE_WIDTH - (2 * MARGIN) - GAP - LEFT_COL_WIDTH


def wrap_text(text: str, font_name: str, font_size: int, max_width: float):
    words = text.split()
    lines = []
    current = ""

    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font_name, font_size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word

    if current:
        lines.append(current)

    return lines


def draw_box(c: canvas.Canvas, x: float, y: float, width: float, height: float, title: str):
    c.setFillColor(colors.HexColor("#071527"))
    c.setStrokeColor(colors.HexColor("#17314f"))
    c.roundRect(x, y, width, height, 14, fill=1, stroke=1)

    c.setFillColor(colors.HexColor("#4dd4ff"))
    c.roundRect(x + 12, y + height - 22, 92, 6, 3, fill=1, stroke=0)

    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(x + 16, y + height - 38, title)


def draw_paragraph(c: canvas.Canvas, x: float, y: float, width: float, text: str, font_size: int = 9, leading: int = 13):
    lines = wrap_text(text, "Helvetica", font_size, width)
    c.setFillColor(colors.HexColor("#d7e4f4"))
    c.setFont("Helvetica", font_size)
    cursor_y = y
    for line in lines:
        c.drawString(x, cursor_y, line)
        cursor_y -= leading
    return cursor_y


def draw_bullets(c: canvas.Canvas, x: float, y: float, width: float, items: list[str], font_size: int = 8, leading: int = 11):
    cursor_y = y
    bullet_gap = 9
    wrap_width = width - 14
    for item in items:
        lines = wrap_text(item, "Helvetica", font_size, wrap_width)
        c.setFillColor(colors.HexColor("#4dd4ff"))
        c.setFont("Helvetica-Bold", font_size)
        c.drawString(x, cursor_y, "-")
        c.setFillColor(colors.HexColor("#d7e4f4"))
        c.setFont("Helvetica", font_size)
        line_y = cursor_y
        for index, line in enumerate(lines):
            draw_x = x + bullet_gap
            c.drawString(draw_x, line_y, line)
            line_y -= leading
        cursor_y = line_y - 3
    return cursor_y


def draw_steps(c: canvas.Canvas, x: float, y: float, width: float, items: list[str]):
    cursor_y = y
    for index, item in enumerate(items, start=1):
        prefix = f"{index}. "
        prefix_width = stringWidth(prefix, "Helvetica-Bold", 9)
        lines = wrap_text(item, "Courier", 8, width - prefix_width - 4)
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(x, cursor_y, prefix)
        line_y = cursor_y
        c.setFillColor(colors.HexColor("#d7e4f4"))
        c.setFont("Courier", 8)
        for line in lines:
            c.drawString(x + prefix_width + 4, line_y, line)
            line_y -= 12
        cursor_y = line_y - 2
    return cursor_y


def build_pdf():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT_PATH), pagesize=A4)
    c.setTitle("Resumen app Robbe360")
    c.setAuthor("OpenAI Codex")
    c.setSubject("Resumen de la app basado en evidencia del repo")

    c.setFillColor(colors.HexColor("#04111f"))
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)

    header_x = MARGIN
    header_y = PAGE_HEIGHT - MARGIN - HEADER_HEIGHT
    header_w = PAGE_WIDTH - (2 * MARGIN)

    c.setFillColor(colors.HexColor("#081a31"))
    c.setStrokeColor(colors.HexColor("#16314f"))
    c.roundRect(header_x, header_y, header_w, HEADER_HEIGHT, 18, fill=1, stroke=1)

    c.setFillColor(colors.HexColor("#4dd4ff"))
    c.roundRect(header_x + 16, header_y + HEADER_HEIGHT - 18, 120, 6, 3, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 21)
    c.drawString(header_x + 16, header_y + HEADER_HEIGHT - 40, TITLE)
    c.setFont("Helvetica", 9)
    c.setFillColor(colors.HexColor("#b8d4ea"))
    c.drawString(header_x + 16, header_y + 18, SUBTITLE)

    current_top = header_y - GAP

    what_h = 112
    who_h = 94
    features_h = 304
    architecture_h = 304
    run_h = 124

    left_x = MARGIN
    right_x = MARGIN + LEFT_COL_WIDTH + GAP

    what_y = current_top - what_h
    draw_box(c, left_x, what_y, LEFT_COL_WIDTH, what_h, "Qué es")
    draw_paragraph(c, left_x + 16, what_y + what_h - 56, LEFT_COL_WIDTH - 32, WHAT_IT_IS, font_size=9, leading=13)

    who_y = current_top - who_h
    draw_box(c, right_x, who_y, RIGHT_COL_WIDTH, who_h, "Para quién")
    draw_paragraph(c, right_x + 16, who_y + who_h - 56, RIGHT_COL_WIDTH - 32, WHO_ITS_FOR, font_size=9, leading=13)

    second_row_top = min(what_y, who_y) - GAP

    features_y = second_row_top - features_h
    architecture_y = second_row_top - architecture_h

    draw_box(c, left_x, features_y, LEFT_COL_WIDTH, features_h, "Qué hace")
    draw_bullets(c, left_x + 16, features_y + features_h - 56, LEFT_COL_WIDTH - 32, FEATURES, font_size=8, leading=11)

    draw_box(c, right_x, architecture_y, RIGHT_COL_WIDTH, architecture_h, "Cómo funciona")
    draw_bullets(c, right_x + 16, architecture_y + architecture_h - 56, RIGHT_COL_WIDTH - 32, ARCHITECTURE, font_size=8, leading=11)

    third_row_top = min(features_y, architecture_y) - GAP
    run_y = third_row_top - run_h
    run_w = PAGE_WIDTH - (2 * MARGIN)
    draw_box(c, MARGIN, run_y, run_w, run_h, "Cómo ejecutar")
    draw_steps(c, MARGIN + 16, run_y + run_h - 56, run_w - 32, RUN_STEPS)

    c.setFillColor(colors.HexColor("#8ca7c2"))
    c.setFont("Helvetica", 7)
    c.drawRightString(
        PAGE_WIDTH - MARGIN,
        16,
        f"Salida generada: {OUTPUT_PATH.name}",
    )

    c.showPage()
    c.save()


if __name__ == "__main__":
    build_pdf()
