export default function Achievements() {
  const achievements = [
    {
      title: '经济成就',
      description: '任内实施大规模减税政策，推动美国经济强劲增长，失业率创下历史新低',
    },
    {
      title: '司法任命',
      description: '任命了三位保守派最高法院大法官，重塑了美国司法格局',
    },
    {
      title: '边境安全',
      description: '推动加强边境管控，主张修建边境墙以遏制非法移民',
    },
    {
      title: '贸易政策',
      description: '重新谈判贸易协定，对华发动贸易战，主张公平贸易',
    },
    {
      title: '能源独立',
      description: '推动美国能源独立，放宽能源行业监管，使美国成为能源净出口国',
    },
    {
      title: '外交突破',
      description: '促成以色列与多个阿拉伯国家建交的《亚伯拉罕协议》',
    },
  ]

  return (
    <section className="section bg-light">
      <div className="container">
        <h2>主要成就</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
