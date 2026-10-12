import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData, identity } from '../data';

/* ------------------------------------------------------------------
   PRINT-ONLY PROFESSIONAL SHEET
   Rendered on demand by the "Print / save PDF" action: it replaces the
   site with a clean, A4-formatted CV that is always in sync with the
   content in data.ts — no second document to maintain.
   ------------------------------------------------------------------ */

const H: React.FC<{ children: React.ReactNode }> = ({ children }) => <h2>{children}</h2>;

export const ResumeSheet: React.FC = () => {
  const { language } = useLanguage();
  const d = portfolioData[language];
  const isAr = language === 'ar';
  const name = isAr ? identity.nameAr : identity.nameEn;

  return (
    <div id="resume-sheet" className="resume-page" dir={isAr ? 'rtl' : 'ltr'}>
      {/* header */}
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <div>
            <h1>{name}</h1>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A6A1F', marginTop: 4 }}>
              {isAr ? 'مهندس مساحة وطرق' : 'Surveying & Roads Engineer'}
            </p>
          </div>
          <div style={{ textAlign: isAr ? 'left' : 'right', fontSize: 10.5, lineHeight: 1.7 }}>
            <div>{identity.email}</div>
            <div>{identity.phone}</div>
            <div>{isAr ? identity.locationAr : identity.locationEn}</div>
            <div>{identity.site.replace('https://', '')}</div>
          </div>
        </div>
        <div className="r-rule" />
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '62% 38%', gap: 18 }}>
        {/* main column */}
        <div>
          <section style={{ marginBottom: 14 }}>
            <H>{isAr ? 'الملخص المهني' : 'Profile'}</H>
            <p>{d.profile.p1}</p>
            <p style={{ marginTop: 6 }}>{d.profile.p2}</p>
          </section>

          <section style={{ marginBottom: 14 }}>
            <H>{isAr ? 'القدرات (ستة مسارات)' : 'Capabilities (six tracks)'}</H>
            <ul style={{ paddingInlineStart: 0, listStyle: 'none' }}>
              {d.capabilities.tracks.map((t) => (
                <li key={t.code} style={{ marginBottom: 7 }}>
                  <strong>
                    {t.code} — {t.title}
                  </strong>
                  <div style={{ color: '#3C4C5F' }}>{t.capabilities.slice(0, 4).join(' · ')}</div>
                  <div style={{ color: '#8A6A1F', fontSize: 10 }}>
                    {isAr ? 'المخرجات' : 'Outputs'}: {t.deliverables.join(' · ')}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <H>{isAr ? 'الخبرة والتعليم' : 'Experience & Education'}</H>
            {d.experience.jobs.map((job) => (
              <div key={job.role} style={{ marginBottom: 9 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <strong>{job.role}</strong>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}>{job.period}</span>
                </div>
                <div style={{ color: '#3C4C5F', fontSize: 10.5 }}>
                  {job.org} — {job.location}
                </div>
                <ul style={{ marginTop: 3 }}>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        {/* side column */}
        <div>
          <section style={{ marginBottom: 14 }}>
            <H>{isAr ? 'المهارات' : 'Skills'}</H>
            {d.experience.groups.map((g) => (
              <div key={g.id} style={{ marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 10.5 }}>{g.title}</div>
                <ul style={{ paddingInlineStart: 14, margin: 0 }}>
                  {g.items.map((s) => (
                    <li key={s.name}>
                      {s.name} — <span style={{ color: '#8A6A1F' }}>{s.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: 14 }}>
            <H>{isAr ? 'الشهادات' : 'Credentials'}</H>
            <ul>
              {d.credentials.items.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}</strong>
                  <div style={{ color: '#3C4C5F', fontSize: 10 }}>
                    {c.issuer} — {c.date}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: 14 }}>
            <H>{isAr ? 'الأدوات' : 'Tools'}</H>
            <p style={{ fontSize: 10.5 }}>
              Total Station · Digital Level · GNSS/RTK · AutoCAD · Civil 3D · QGIS · Google Earth Pro · Excel
            </p>
          </section>

          <section>
            <H>{isAr ? 'الأدوار المستهدفة' : 'Target roles'}</H>
            <ul>
              {d.profile.searchRoles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p style={{ marginTop: 6, fontSize: 10.5, color: '#8A6A1F' }}>
              {isAr
                ? 'متاح للعمل: ميداني ومكتبي — تنقّل داخل المملكة · بدء فوري'
                : 'Available: field & office — travel within KSA · immediate start'}
            </p>
          </section>
        </div>
      </div>

      <div className="r-rule" style={{ marginTop: 10 }} />
      <p style={{ fontSize: 9.5, color: '#667687', textAlign: 'center', margin: 0 }}>
        {isAr ? 'نسخة محدّثة من الملف المهني' : 'Current copy of the professional sheet'} — {identity.site.replace('https://', '')} · {identity.updated}
      </p>
    </div>
  );
};
