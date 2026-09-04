from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


def set_run_font(run, name="Calibri", size=11, bold=False, color=None):
    run.font.name = name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    run.font.size = Pt(size)
    run.bold = bold
    run.font.color.rgb = color or RGBColor(0, 0, 0)


def set_paragraph_spacing(paragraph, before=0, after=6, line=1.08):
    fmt = paragraph.paragraph_format
    fmt.space_before = Pt(before)
    fmt.space_after = Pt(after)
    fmt.line_spacing = line
    fmt.line_spacing_rule = WD_LINE_SPACING.MULTIPLE


def add_top_line(paragraph):
    p_pr = paragraph._p.get_or_add_pPr()
    p_bdr = OxmlElement("w:pBdr")
    top = OxmlElement("w:top")
    top.set(qn("w:val"), "single")
    top.set(qn("w:sz"), "12")
    top.set(qn("w:space"), "1")
    top.set(qn("w:color"), "000000")
    p_bdr.append(top)
    p_pr.append(p_bdr)


def add_section_heading(doc, text):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    set_paragraph_spacing(p, before=10, after=6, line=1.0)
    add_top_line(p)
    run = p.add_run(text.upper())
    set_run_font(run, size=12, bold=True)


def add_skill_line(doc, label, skills):
    p = doc.add_paragraph()
    set_paragraph_spacing(p, before=0, after=3, line=1.08)
    label_run = p.add_run(f"{label}: ")
    set_run_font(label_run, size=11, bold=True)
    skills_run = p.add_run(skills)
    set_run_font(skills_run, size=11, bold=False)


def add_job_header(doc, title, company, dates):
    p = doc.add_paragraph()
    set_paragraph_spacing(p, before=8, after=2, line=1.08)
    title_run = p.add_run(title)
    set_run_font(title_run, size=11, bold=True)
    mid = p.add_run("  |  ")
    set_run_font(mid, size=11)
    company_run = p.add_run(company)
    set_run_font(company_run, size=11, bold=False)
    mid2 = p.add_run("  |  ")
    set_run_font(mid2, size=11)
    date_run = p.add_run(dates)
    set_run_font(date_run, size=11, bold=True)


def add_bullet(doc, text):
    p = doc.add_paragraph(style="List Bullet")
    set_paragraph_spacing(p, before=0, after=2, line=1.08)
    if p.runs:
        p.runs[0].text = text
        set_run_font(p.runs[0], size=11)
    else:
        run = p.add_run(text)
        set_run_font(run, size=11)


def add_project(doc, title, body):
    p = doc.add_paragraph()
    set_paragraph_spacing(p, before=6, after=2, line=1.08)
    run = p.add_run(title)
    set_run_font(run, size=11, bold=True)
    desc = doc.add_paragraph()
    set_paragraph_spacing(desc, before=0, after=4, line=1.08)
    desc_run = desc.add_run(body)
    set_run_font(desc_run, size=11)


def build():
    doc = Document()

    section = doc.sections[0]
    section.top_margin = Inches(0.55)
    section.bottom_margin = Inches(0.55)
    section.left_margin = Inches(0.7)
    section.right_margin = Inches(0.7)

    styles = doc.styles["Normal"]
    styles.font.name = "Calibri"
    styles.font.size = Pt(11)

    name = doc.add_paragraph()
    name.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(name, before=0, after=2, line=1.0)
    name_run = name.add_run("NIKHIL")
    set_run_font(name_run, size=22, bold=True)

    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(title, before=0, after=2, line=1.0)
    title_run = title.add_run("AI/ML Full Stack Developer | React.js | Python | JavaScript")
    set_run_font(title_run, size=11)

    contact = doc.add_paragraph()
    contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(contact, before=0, after=8, line=1.0)
    contact_run = contact.add_run(
        "+91-8800868912  |  nikhilj5prime@gmail.com  |  Noida, Delhi (NCR)"
    )
    set_run_font(contact_run, size=11)

    add_section_heading(doc, "Professional Summary")
    summary = doc.add_paragraph()
    set_paragraph_spacing(summary, before=0, after=4, line=1.08)
    summary_run = summary.add_run(
        "Dedicated Software Developer with 5 years of experience designing, developing, and "
        "maintaining enterprise web applications and AI/ML-powered search solutions. Core "
        "expertise in AI, Python, FastAPI, React.js, JavaScript, and MongoDB, delivering "
        "scalable frontends and RESTful APIs for clients in Banking, Investigations, and IoT "
        "domains. Proven experience building UIs for platforms leveraging advanced AI/ML and "
        "search algorithms (DataBeagle, Content Lens). Strong collaborator in Agile environments "
        "with a focus on code quality, testing, and production reliability."
    )
    set_run_font(summary_run, size=11)

    add_section_heading(doc, "Core Technical Skills")
    add_skill_line(
        doc,
        "AI/ML",
        "AI-powered Search, Semantic Search, NLP, RAG Workflow, LLM Training, MCP, Content Discovery, Search Algorithms",
    )
    add_skill_line(
        doc,
        "Backend",
        "Python, FastAPI, Django, REST APIs, Microservices",
    )
    add_skill_line(
        doc,
        "Frontend",
        "React.js, JavaScript, TypeScript, Redux, HTML, CSS, MUI, Bootstrap",
    )
    add_skill_line(
        doc,
        "Databases",
        "MongoDB, Intelligent Retrieval",
    )
    add_skill_line(
        doc,
        "Tools / Quality",
        "Git, Jest, Jira, Bitbucket, Azure, Agile/Scrum, Code Reviews",
    )

    add_section_heading(doc, "Work Experience")
    add_job_header(
        doc,
        "AI/ML, Python, React, JavaScript Developer",
        "Audax Labs Pvt. Ltd.",
        "Sep 2021 – Present",
    )
    bullets = [
        "Contributed to AI/ML-enabled search applications and content-discovery platforms used in production environments.",
        "Implemented RESTful APIs in React.js for DataBeagle (Hitachi), an AI/ML-powered search application for banking and investigations, with a focus on performance and scalability.",
        "Conducted code reviews and maintained code quality across enterprise modules serving clients including HITACHI and RABOBANK.",
        "Transformed a JavaScript application to TypeScript for Content Lens (Leonardo), an AI/ML-driven content discovery platform, improving performance and security.",
        "Designed and implemented new modules incorporating APIs, data manipulation, and additional product functionality in collaboration with project managers.",
        "Executed multilingual application translation between English and Spanish according to client specifications.",
        "Wrote comprehensive test cases using Jest across multiple modules and resolved critical production issues through analysis and debugging.",
        "Participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives.",
    ]
    for item in bullets:
        add_bullet(doc, item)

    add_section_heading(doc, "Projects")
    add_project(
        doc,
        "DataBeagle – AI/ML Search Platform (Hitachi)",
        "Enterprise search application for banking and investigations used by HITACHI and RABOBANK. Leverages advanced AI/ML and search algorithms for threat management, cost reduction, and investigation workflows. Built React.js frontend with RESTful API integration for efficient data retrieval and scalable search operations.",
    )
    add_project(
        doc,
        "Content Lens – AI/ML Content Discovery (Leonardo)",
        "Cutting-edge search application for the Italian agency LEONARDO harnessing advanced AI/ML algorithms for accurate and efficient content discovery. Migrated codebase from JavaScript to TypeScript for enhanced performance and security. Designed and implemented new modules with APIs, data manipulation, and diverse functionalities.",
    )
    add_project(
        doc,
        "FOTA – Firmware Over-The-Air (Harley-Davidson)",
        "IoT-based application for seamless firmware updates on Harley-Davidson electric bikes using Azure cloud technology and storage. Enables integration of new features and updates, ensuring optimal device performance and a future-ready user experience.",
    )

    add_section_heading(doc, "Education")
    edu = doc.add_paragraph()
    set_paragraph_spacing(edu, before=2, after=0, line=1.08)
    edu_title = edu.add_run("Bachelor in Computer Science Engineering")
    set_run_font(edu_title, size=11, bold=True)
    edu_mid = edu.add_run("  |  ")
    set_run_font(edu_mid, size=11)
    edu_school = edu.add_run("Bengal College of Engineering and Technology, Durgapur, W.B.")
    set_run_font(edu_school, size=11)
    edu_mid2 = edu.add_run("  |  ")
    set_run_font(edu_mid2, size=11)
    edu_dates = edu.add_run("2017 – 2021")
    set_run_font(edu_dates, size=11, bold=True)

    outputs = [
        Path(r"p:\resume\AI-ML_Resume\public\Nikhil_Resume.docx"),
        Path(r"C:\Users\HP\Downloads\Nikhil_Resume.docx"),
        Path(r"p:\resume\AI-ML_Resume\Nikhil_Resume.docx"),
    ]
    data = None
    first = outputs[0]
    first.parent.mkdir(parents=True, exist_ok=True)
    doc.save(str(first))
    data = first.read_bytes()
    for path in outputs[1:]:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
        print("wrote", path)
    print("wrote", first)


if __name__ == "__main__":
    build()
