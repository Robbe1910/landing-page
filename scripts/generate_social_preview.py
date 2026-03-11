from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
OUTPUT_DIR = ROOT / "output"

WIDTH = 1080
HEIGHT = 1350

BG_TOP = (4, 9, 20)
BG_BOTTOM = (8, 20, 40)
PANEL = (6, 16, 32, 226)
PANEL_SOLID = (8, 21, 38, 246)
WHITE = (238, 246, 255)
MUTED = (170, 191, 214)
MUTED_SOFT = (120, 144, 170)
CYAN = (77, 212, 255)
BLUE = (63, 102, 255)
AMBER = (246, 179, 74)
AMBER_SOFT = (255, 213, 151)

FONT_DIR = Path("C:/Windows/Fonts")


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size=size)


FONT_TINY = font("segoeui.ttf", 16)
FONT_SMALL = font("segoeui.ttf", 20)
FONT_BODY = font("segoeui.ttf", 24)
FONT_SEMIBOLD = font("segoeuib.ttf", 24)
FONT_CARD_TITLE = font("segoeuib.ttf", 22)
FONT_H3 = font("segoeuib.ttf", 28)
FONT_H2 = font("segoeuib.ttf", 36)
FONT_TITLE = font("segoeuib.ttf", 58)


SERVICES = [
    {
        "title": "Landing Sprint 48h",
        "price": "590 EUR",
        "desc": "Landing clara y lista para salir rapido con CTA directo y estructura comercial.",
        "bullets": ["Copy base y CTA"],
    },
    {
        "title": "Automatizacion IA ligera",
        "price": "490 EUR",
        "desc": "Flujo simple para quitar tareas repetitivas sin convertirlo en un proyecto eterno.",
        "bullets": ["Diagnostico y flujo"],
    },
    {
        "title": "Web local con WhatsApp",
        "price": "690 EUR",
        "desc": "Preview pensada para negocio local con mapa, horario, menu y conversion movil.",
        "bullets": ["WhatsApp y mapa"],
    },
]


def vertical_gradient(width: int, height: int, top: tuple[int, int, int], bottom: tuple[int, int, int]) -> Image.Image:
    image = Image.new("RGBA", (width, height))
    draw = ImageDraw.Draw(image)
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(int(top[i] * (1 - ratio) + bottom[i] * ratio) for i in range(3)) + (255,)
        draw.line((0, y, width, y), fill=color)
    return image


def add_glow(base: Image.Image, center: tuple[int, int], radius: int, color: tuple[int, int, int], opacity: int) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    x, y = center
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=(*color, opacity))
    base.alpha_composite(layer.filter(ImageFilter.GaussianBlur(radius // 2)))


def add_grid(base: Image.Image, spacing: int = 54, opacity: int = 14) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    for x in range(0, base.size[0], spacing):
        draw.line((x, 0, x, base.size[1]), fill=(255, 255, 255, opacity))
    for y in range(0, base.size[1], spacing):
        draw.line((0, y, base.size[0], y), fill=(255, 255, 255, opacity))
    base.alpha_composite(layer)


def wrap_lines(draw: ImageDraw.ImageDraw, text: str, use_font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current: list[str] = []
    for word in words:
        candidate = " ".join(current + [word])
        left, top, right, bottom = draw.textbbox((0, 0), candidate, font=use_font)
        if right - left <= max_width:
            current.append(word)
            continue
        if current:
            lines.append(" ".join(current))
        current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def draw_lines(
    draw: ImageDraw.ImageDraw,
    text: str,
    use_font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    x: int,
    y: int,
    max_width: int,
    line_gap: int = 8,
    max_lines: int | None = None,
) -> int:
    lines = wrap_lines(draw, text, use_font, max_width)
    if max_lines is not None:
        lines = lines[:max_lines]
    for line in lines:
        draw.text((x, y), line, font=use_font, fill=fill)
        y += use_font.size + line_gap
    return y


def draw_badge(draw: ImageDraw.ImageDraw, text: str, x: int, y: int, fill: tuple[int, int, int, int], text_fill: tuple[int, int, int]) -> None:
    left, top, right, bottom = draw.textbbox((0, 0), text, font=FONT_TINY)
    width = right - left + 28
    draw.rounded_rectangle((x, y, x + width, y + 34), radius=17, fill=fill, outline=(255, 255, 255, 22), width=1)
    draw.text((x + 14, y + 8), text, font=FONT_TINY, fill=text_fill)


def draw_button(draw: ImageDraw.ImageDraw, text: str, box: tuple[int, int, int, int], fill, outline, text_fill) -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=24, fill=fill, outline=outline, width=1)
    left, top, right, bottom = draw.textbbox((0, 0), text, font=FONT_SMALL)
    text_x = x1 + ((x2 - x1) - (right - left)) // 2
    text_y = y1 + ((y2 - y1) - (bottom - top)) // 2 - 1
    draw.text((text_x, text_y), text, font=FONT_SMALL, fill=text_fill)


def draw_service_card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], service: dict[str, object]) -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=28, fill=(255, 255, 255, 10), outline=(255, 255, 255, 24), width=1)
    draw_badge(draw, "SERVICIO", x1 + 22, y1 + 20, (8, 21, 38, 220), CYAN)
    draw_badge(draw, service["price"], x2 - 138, y1 + 20, (26, 20, 32, 230), AMBER_SOFT)

    title_y = draw_lines(draw, service["title"], FONT_CARD_TITLE, WHITE, x1 + 22, y1 + 72, x2 - x1 - 44, line_gap=3, max_lines=3)
    desc_y = draw_lines(draw, service["desc"], FONT_TINY, MUTED, x1 + 22, title_y + 10, x2 - x1 - 44, line_gap=5, max_lines=4)

    bullet_y = desc_y + 10
    for bullet in service["bullets"][:1]:
        draw.rounded_rectangle((x1 + 22, bullet_y, x2 - 22, bullet_y + 38), radius=16, fill=(9, 23, 40, 215))
        draw.ellipse((x1 + 34, bullet_y + 15, x1 + 42, bullet_y + 23), fill=CYAN)
        draw_lines(draw, bullet, FONT_TINY, WHITE, x1 + 52, bullet_y + 9, x2 - x1 - 82, line_gap=3, max_lines=1)
        bullet_y += 46


def draw_service_row(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], service: dict[str, object]) -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=28, fill=(255, 255, 255, 11), outline=(255, 255, 255, 24), width=1)
    draw_badge(draw, "PACK", x1 + 22, y1 + 18, (8, 21, 38, 225), CYAN)
    draw_badge(draw, service["price"], x2 - 138, y1 + 18, (31, 22, 18, 230), AMBER_SOFT)
    title_end = draw_lines(draw, service["title"], FONT_CARD_TITLE, WHITE, x1 + 22, y1 + 54, 320, line_gap=3, max_lines=1)
    draw_lines(draw, service["desc"], FONT_TINY, MUTED, x1 + 22, title_end + 4, x2 - x1 - 210, line_gap=3, max_lines=1)
    draw_lines(draw, service["bullets"][0], FONT_TINY, CYAN, x2 - 210, y1 + 56, 172, line_gap=3, max_lines=1)


def draw_linkedin_card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], service: dict[str, object]) -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=26, fill=(255, 255, 255, 10), outline=(255, 255, 255, 22), width=1)
    draw_badge(draw, service["price"], x1 + 20, y1 + 18, (26, 20, 32, 228), AMBER_SOFT)
    title_end = draw_lines(draw, service["title"], FONT_SEMIBOLD, WHITE, x1 + 20, y1 + 64, x2 - x1 - 40, line_gap=4, max_lines=2)
    draw_lines(draw, service["desc"], FONT_TINY, MUTED, x1 + 20, title_end + 8, x2 - x1 - 40, line_gap=4, max_lines=3)


def save_image(image: Image.Image, filename: str) -> None:
    output_path = OUTPUT_DIR / filename
    public_path = PUBLIC_DIR / filename
    image.save(output_path)
    image.save(public_path)
    print(f"Saved {output_path}")
    print(f"Saved {public_path}")


def make_core_preview() -> Image.Image:
    canvas = vertical_gradient(WIDTH, HEIGHT, BG_TOP, BG_BOTTOM)
    add_glow(canvas, (220, 150), 220, BLUE, 82)
    add_glow(canvas, (896, 220), 200, CYAN, 70)
    add_glow(canvas, (840, 1130), 240, BLUE, 76)
    add_grid(canvas)

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw.rounded_rectangle((64, 42, 1016, 1288), radius=42, fill=(4, 12, 26, 172), outline=(255, 255, 255, 18), width=1)
    draw.text((104, 86), "ROBBE360  |  RRSS PREVIEW", font=FONT_TINY, fill=CYAN)
    title_end = draw_lines(
        draw,
        "Preview de landing bien estructurada para captar clientes",
        FONT_TITLE,
        WHITE,
        104,
        122,
        860,
        line_gap=6,
    )
    draw_lines(
        draw,
        "Hero claro, logo visible, bloque visual y servicios con precios para que se entienda rapido que se ofrece.",
        FONT_BODY,
        MUTED,
        104,
        title_end + 16,
        760,
        line_gap=8,
        max_lines=3,
    )

    browser = (104, 324, 976, 1226)
    draw.rounded_rectangle(browser, radius=34, fill=PANEL_SOLID, outline=(255, 255, 255, 28), width=1)
    draw.rounded_rectangle((104, 324, 976, 382), radius=34, fill=(255, 255, 255, 14))
    for idx, color in enumerate(((255, 96, 92), (255, 189, 68), (0, 202, 78))):
        x = 136 + idx * 24
        draw.ellipse((x, 346, x + 12, 358), fill=color)
    draw.text((208, 340), "robbe360.com", font=FONT_SMALL, fill=(218, 231, 244))

    logo = Image.open(PUBLIC_DIR / "logo.png").convert("RGBA")
    logo.thumbnail((58, 58))
    overlay.alpha_composite(logo, (136, 418))
    draw.text((206, 420), "Robbe360", font=FONT_SEMIBOLD, fill=WHITE)
    draw.text((206, 450), "Precision digital sin mascaras", font=FONT_SMALL, fill=MUTED)

    nav_x = 568
    for label, width, active in [
        ("Servicios", 94, False),
        ("Casos", 70, False),
        ("Contacto", 94, False),
        ("WhatsApp", 102, True),
    ]:
        fill = (59, 109, 255, 236) if active else (255, 255, 255, 10)
        text_fill = WHITE if active else (223, 235, 247)
        draw.rounded_rectangle((nav_x, 422, nav_x + width, 462), radius=20, fill=fill, outline=(255, 255, 255, 18), width=1)
        draw.text((nav_x + 18, 433), label, font=FONT_SMALL, fill=text_fill)
        nav_x += width + 12

    hero_left_x = 136
    hero_top = 520
    draw.text((hero_left_x, hero_top), "DESARROLLO WEB  |  AUTOMATIZACION  |  PRODUCTO", font=FONT_TINY, fill=CYAN)
    heading_end = draw_lines(
        draw,
        "Desarrollo web y sistemas ligeros con salida real.",
        FONT_H2,
        WHITE,
        hero_left_x,
        hero_top + 34,
        420,
        line_gap=6,
        max_lines=3,
    )
    copy_end = draw_lines(
        draw,
        "La idea es que la pagina explique bien el negocio, muestre lo que haces y deje claro como contactarte o contratar.",
        FONT_SMALL,
        MUTED,
        hero_left_x,
        heading_end + 14,
        424,
        line_gap=7,
        max_lines=4,
    )

    draw_button(
        draw,
        "Escribirme por WhatsApp",
        (hero_left_x, copy_end + 18, hero_left_x + 260, copy_end + 66),
        (63, 102, 255, 255),
        (63, 102, 255, 255),
        WHITE,
    )
    draw_button(
        draw,
        "Ver servicios",
        (hero_left_x + 276, copy_end + 18, hero_left_x + 452, copy_end + 66),
        (255, 255, 255, 12),
        (255, 255, 255, 26),
        WHITE,
    )

    visual_box = (610, 504, 928, 772)
    draw.rounded_rectangle(visual_box, radius=32, fill=(255, 255, 255, 10), outline=(255, 255, 255, 22), width=1)
    draw_badge(draw, "WOLF 888  |  IDENTIDAD VISUAL", 634, 528, (9, 23, 40, 220), CYAN)
    draw_badge(draw, "FULLSTACK + IA LIGERA", 722, 714, (11, 28, 46, 230), AMBER_SOFT)

    wolf = Image.open(PUBLIC_DIR / "wolf888-clean.webp").convert("RGBA")
    wolf.thumbnail((250, 220))
    add_glow(overlay, (770, 638), 96, CYAN, 72)
    overlay.alpha_composite(wolf, (646, 560))

    draw.rounded_rectangle((136, 812, 928, 864), radius=22, fill=(9, 23, 40, 220), outline=(255, 255, 255, 16), width=1)
    draw.text((160, 828), "SERVICIOS Y PRECIOS", font=FONT_TINY, fill=AMBER_SOFT)
    draw.text((328, 823), "Preview comercial pensada para RRSS, anuncios o portada social.", font=FONT_SMALL, fill=MUTED)

    card_y = 890
    card_w = 244
    gap = 18
    for index, service in enumerate(SERVICES):
        x1 = 136 + index * (card_w + gap)
        draw_service_card(draw, (x1, card_y, x1 + card_w, 1142), service)

    footer_y = 1166
    draw.rounded_rectangle((136, footer_y, 928, footer_y + 42), radius=20, fill=(255, 255, 255, 10), outline=(255, 255, 255, 18), width=1)
    draw.text((160, footer_y + 11), "Logo, propuesta de valor, servicios, precios y CTA en una sola pieza limpia.", font=FONT_TINY, fill=(221, 235, 247))
    draw.text((748, footer_y + 11), "robbe360.com", font=FONT_TINY, fill=CYAN)

    canvas.alpha_composite(overlay)
    return canvas


def make_instagram_variant() -> Image.Image:
    canvas = vertical_gradient(WIDTH, HEIGHT, (7, 8, 22), (13, 18, 40))
    add_glow(canvas, (180, 140), 220, BLUE, 90)
    add_glow(canvas, (884, 180), 180, AMBER, 58)
    add_glow(canvas, (780, 1120), 250, CYAN, 64)
    add_grid(canvas, spacing=48, opacity=12)

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    draw.rounded_rectangle((56, 42, 1024, 1288), radius=44, fill=(5, 14, 30, 178), outline=(255, 255, 255, 20), width=1)

    draw.text((98, 86), "INSTAGRAM  |  VERSION COMERCIAL", font=FONT_TINY, fill=AMBER_SOFT)
    title_end = draw_lines(
        draw,
        "Una web que se entiende rapido vende mejor.",
        FONT_TITLE,
        WHITE,
        98,
        118,
        860,
        line_gap=6,
        max_lines=3,
    )
    draw_lines(
        draw,
        "Concepto mas directo para captar curiosos, explicar los packs y empujar al CTA desde el primer vistazo.",
        FONT_BODY,
        MUTED,
        98,
        title_end + 12,
        760,
        line_gap=6,
        max_lines=3,
    )

    main_box = (98, 326, 982, 1236)
    draw.rounded_rectangle(main_box, radius=36, fill=(8, 21, 38, 248), outline=(255, 255, 255, 28), width=1)
    draw.rounded_rectangle((98, 326, 982, 384), radius=36, fill=(255, 255, 255, 14))
    for idx, color in enumerate(((255, 96, 92), (255, 189, 68), (0, 202, 78))):
        x = 130 + idx * 24
        draw.ellipse((x, 348, x + 12, 360), fill=color)
    draw.text((200, 342), "robbe360.com", font=FONT_SMALL, fill=(220, 232, 245))

    logo = Image.open(PUBLIC_DIR / "logo.png").convert("RGBA")
    logo.thumbnail((56, 56))
    overlay.alpha_composite(logo, (128, 414))
    draw.text((196, 418), "Robbe360", font=FONT_SEMIBOLD, fill=WHITE)
    draw.text((196, 448), "Webs claras. CTA directo. Producto util.", font=FONT_SMALL, fill=MUTED)
    draw_badge(draw, "WHATSAPP DIRECTO", 786, 418, (64, 106, 255, 236), WHITE)

    hero_top = 512
    draw_badge(draw, "WEBS PARA CAPTAR CLIENTES", 128, hero_top, (9, 23, 40, 220), CYAN)
    hero_end = draw_lines(
        draw,
        "Desarrollo, estructura y oferta para que el negocio se entienda y la gente escriba.",
        FONT_H2,
        WHITE,
        128,
        hero_top + 52,
        430,
        line_gap=6,
        max_lines=4,
    )
    copy_end = draw_lines(
        draw,
        "Aqui se ve el negocio, lo que ofreces, cuanto cuesta y donde escribirte.",
        FONT_SMALL,
        MUTED,
        128,
        hero_end + 14,
        430,
        line_gap=6,
        max_lines=3,
    )
    draw_button(draw, "Quiero mi landing", (128, copy_end + 18, 352, copy_end + 68), (63, 102, 255, 255), (63, 102, 255, 255), WHITE)
    draw_button(draw, "Ver packs", (368, copy_end + 18, 516, copy_end + 68), (255, 255, 255, 12), (255, 255, 255, 26), WHITE)

    visual_box = (594, 498, 920, 770)
    draw.rounded_rectangle(visual_box, radius=34, fill=(255, 255, 255, 10), outline=(255, 255, 255, 22), width=1)
    draw_badge(draw, "IDENTIDAD VISUAL + TECNICA", 620, 522, (10, 25, 42, 224), CYAN)
    draw_badge(draw, "PRECIOS VISIBLES", 736, 708, (26, 20, 32, 228), AMBER_SOFT)
    wolf = Image.open(PUBLIC_DIR / "wolf888-clean.webp").convert("RGBA")
    wolf.thumbnail((264, 232))
    add_glow(overlay, (760, 632), 104, CYAN, 72)
    overlay.alpha_composite(wolf, (622, 558))

    draw.rounded_rectangle((128, 814, 920, 864), radius=24, fill=(9, 23, 40, 220), outline=(255, 255, 255, 18), width=1)
    draw.text((152, 829), "SERVICIOS LISTOS PARA VENDER", font=FONT_TINY, fill=AMBER_SOFT)
    draw.text((426, 824), "Rows mas agresivas para feed, ads o portada de perfil.", font=FONT_SMALL, fill=MUTED)

    instagram_services = [
        {"title": "Landing 48h", "price": "590 EUR", "desc": "Landing clara y CTA para salir rapido.", "bullets": ["Copy base y CTA"]},
        {"title": "Automatizacion IA", "price": "490 EUR", "desc": "Flujo simple para quitar tareas.", "bullets": ["Diagnostico y flujo"]},
        {"title": "Web local WhatsApp", "price": "690 EUR", "desc": "Mapa, horario y conversion movil.", "bullets": ["WhatsApp y mapa"]},
    ]

    row_top = 870
    row_height = 100
    for index, service in enumerate(instagram_services):
        y1 = row_top + index * 106
        draw_service_row(draw, (128, y1, 920, y1 + row_height), service)

    draw.rounded_rectangle((128, 1198, 920, 1230), radius=16, fill=(63, 102, 255, 230), outline=(63, 102, 255, 230), width=1)
    draw.text((154, 1204), "Escribeme y te monto una preview con tu negocio real.", font=FONT_SMALL, fill=WHITE)

    canvas.alpha_composite(overlay)
    return canvas


def make_linkedin_variant() -> Image.Image:
    width = 1200
    height = 675
    canvas = vertical_gradient(width, height, (8, 12, 22), (14, 22, 36))
    add_glow(canvas, (210, 120), 180, BLUE, 70)
    add_glow(canvas, (980, 120), 160, CYAN, 52)
    add_glow(canvas, (980, 550), 180, AMBER, 36)
    add_grid(canvas, spacing=56, opacity=10)

    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    draw.rounded_rectangle((30, 26, 1170, 649), radius=34, fill=(7, 16, 30, 188), outline=(255, 255, 255, 18), width=1)
    draw.text((72, 64), "LINKEDIN  |  VERSION LIMPIA", font=FONT_TINY, fill=CYAN)
    title_end = draw_lines(
        draw,
        "Desarrollo web, automatizacion y producto con una presentacion mas premium.",
        FONT_H2,
        WHITE,
        72,
        98,
        504,
        line_gap=6,
        max_lines=4,
    )
    copy_end = draw_lines(
        draw,
        "Pensada para LinkedIn: menos ruido visual, mas claridad, servicios visibles y un look mas serio sin perder personalidad.",
        FONT_SMALL,
        MUTED,
        72,
        title_end + 10,
        500,
        line_gap=6,
        max_lines=4,
    )

    draw_badge(draw, "ROBBE360", 72, copy_end + 18, (9, 23, 40, 220), WHITE)
    draw_badge(draw, "PRECISION DIGITAL", 188, copy_end + 18, (26, 20, 32, 226), AMBER_SOFT)

    mockup = (674, 80, 1118, 360)
    draw.rounded_rectangle(mockup, radius=28, fill=(8, 21, 38, 246), outline=(255, 255, 255, 22), width=1)
    draw.rounded_rectangle((674, 80, 1118, 132), radius=28, fill=(255, 255, 255, 12))
    for idx, color in enumerate(((255, 96, 92), (255, 189, 68), (0, 202, 78))):
        x = 700 + idx * 22
        draw.ellipse((x, 100, x + 10, 110), fill=color)
    draw.text((760, 94), "robbe360.com", font=FONT_SMALL, fill=(220, 232, 245))

    logo = Image.open(PUBLIC_DIR / "logo.png").convert("RGBA")
    logo.thumbnail((46, 46))
    overlay.alpha_composite(logo, (706, 154))
    draw.text((766, 156), "Robbe360", font=FONT_SEMIBOLD, fill=WHITE)
    draw.text((766, 184), "Servicios digitales con criterio y estructura.", font=FONT_TINY, fill=MUTED)
    draw_badge(draw, "WEB + IA + PRODUCTO", 896, 156, (9, 23, 40, 220), CYAN)

    wolf = Image.open(PUBLIC_DIR / "wolf888-clean.webp").convert("RGBA")
    wolf.thumbnail((196, 174))
    add_glow(overlay, (920, 262), 80, CYAN, 64)
    overlay.alpha_composite(wolf, (850, 176))
    draw.rounded_rectangle((706, 238, 824, 284), radius=18, fill=(255, 255, 255, 10), outline=(255, 255, 255, 20), width=1)
    draw.text((728, 252), "Landing Sprint", font=FONT_SMALL, fill=WHITE)
    draw.rounded_rectangle((706, 294, 824, 340), radius=18, fill=(255, 255, 255, 10), outline=(255, 255, 255, 20), width=1)
    draw.text((728, 308), "Automatizacion", font=FONT_SMALL, fill=WHITE)

    info_y = 376
    draw.rounded_rectangle((72, info_y, 1130, info_y + 34), radius=17, fill=(255, 255, 255, 10), outline=(255, 255, 255, 14), width=1)
    draw.text((90, info_y + 10), "Servicios con precio visible, propuesta clara y salida real para negocio o proyecto.", font=FONT_TINY, fill=(219, 232, 245))

    card_y = 428
    card_w = 324
    gap = 20
    for index, service in enumerate(SERVICES):
        x1 = 72 + index * (card_w + gap)
        draw_linkedin_card(draw, (x1, card_y, x1 + card_w, 604), service)

    draw.rounded_rectangle((72, 616, 1130, 638), radius=11, fill=(255, 255, 255, 10))
    draw.text((88, 621), "robbe360.com  |  identidad visual  |  servicios con CTA  |  enfoque mas premium para LinkedIn", font=FONT_TINY, fill=MUTED)

    canvas.alpha_composite(overlay)
    return canvas


def main() -> None:
    OUTPUT_DIR.mkdir(exist_ok=True)
    save_image(make_core_preview(), "rrss-layout-preview.png")
    save_image(make_instagram_variant(), "rrss-instagram-agresiva.png")
    save_image(make_linkedin_variant(), "rrss-linkedin-premium.png")


if __name__ == "__main__":
    main()
