export default function App() {
  const featuredCrepes = [
    {
      name: "Boom Crêpe",
      description: "Custard, banana, strawberries, nutella, and a Creme brûlée top.",
      note: "Crème brûlée favorite",
      image: "/IMG_7663.jpg"
    },
    {
      name: "Durian Boom",
      description: "Real durian fruit, durian custard, vanilla ice cream,  and Crème brûlée.",
      note: "House highlight",
      image: "/IMG_7669.jpg"
    },
    {
      name: "Mango Boom",
      description: "Fresh mango cubes, custard, and vanilla ice cream.",
      note: "Seasonal",
      image: "/IMG_2988.JPG"
    }
  ]

  const sweetCrepes = [
    { name: "1. Banana Chocolate Whipped Cream", ingredients: "Banana, whipped cream, chocolate sauce" },
    { name: "2. Peanut Butter Nutella", ingredients: "Whipped cream, peanut butter, Nutella" },
    { name: "3. Mango Whipped Cream", ingredients: "Fresh mango cubes, whipped cream" },
    { name: "4. Blueberry Whipped Cream", ingredients: "Blueberries, whipped cream, berry sauce" },
    { name: "5. Snow White", ingredients: "Strawberries, whipped cream, chocolate syrup" },
    { name: "6. Nutella Banana", ingredients: "Banana, Nutella" },
    { name: "7. Cinnamon Strawberry", ingredients: "Strawberries, cinnamon powder, whipped cream, chocolate sauce" },
    { name: "8. Chocolate Delight", ingredients: "Banana, chocolate ice cream, whipped cream, chocolate sauce" },
    { name: "9. Merry Berry", ingredients: "Strawberry, berry sauce, whipped cream, strawberry ice cream" },
    { name: "10. Strawberry Kinder", ingredients: "Strawberries, Kinder Bueno bar, whipped cream, Nutella" },
    { name: "11. Rose of Berry", ingredients: "Strawberries, blueberries, whipped cream, cream cheese, blueberry sauce" },
    { name: "12. Vanilla Princess", ingredients: "Strawberries, banana, vanilla ice cream, whipped cream, Nutella" },
    { name: "13. Hazelnut Peanut Banana", ingredients: "Banana, peanut butter, Nutella" },
    { name: "14. Little Princess", ingredients: "Strawberries, banana, whipped cream, Nutella" },
    { name: "15. Country Road", ingredients: "Strawberries, Oreo, cookie straw, vanilla ice cream, whipped cream, Nutella" },
    { name: "26. Strawberry Cheesecake", ingredients: "Strawberries, cheesecake, whipped cream, berry sauce" },
    { name: "27. Blueberry Cheesecake", ingredients: "Blueberries, cheesecake, whipped cream, Nutella" }
  ]

  const cremeBruleeCrepes = [
    { name: "16. Boom Crêpe", ingredients: "Strawberries, banana, custard, vanilla ice cream, Nutella" },
    { name: "17. Durian Boom", ingredients: "Real durian fruit, durian custard, vanilla ice cream, whipped cream" },
    { name: "28. Mango Boom (Seasonal)", ingredients: "Fresh mango cubes, custard, vanilla ice cream" }
  ]

  const savoryCrepes = [
    { name: "18. Ham, Cheese & Avocado", ingredients: "Ham, cheese, avocado slices, black pepper, parsley flakes" },
    { name: "19. Cream Cheese Turkey", ingredients: "Turkey, bacon, avocado, cream cheese, lemon juice" },
    { name: "20. Cream Cheese Salmon", ingredients: "Lox salmon, avocado, cream cheese, honey mustard dill, lemon juice" },
    { name: "21. Spicy Turkey", ingredients: "Turkey, bacon, avocado, cheese, hot sauce, black pepper, parsley flakes" },
    { name: "23. Pesto Ham", ingredients: "Ham, cheese, cucumber, spring mix, pesto, honey mustard dill, black pepper, parsley flakes" },
    { name: "24. Salmon King", ingredients: "Lox salmon, avocado, cheese, spring mix, cucumber, pesto, honey mustard dill, touch of lemon, parsley flakes" },
    { name: "25. Veggie Crêpe", ingredients: "Avocado, cheese, cucumber, spring mix, pesto, lemon juice, parsley flakes" }
  ]

  const colors = {
    bg: "#2f3a2e",
    paper: "#3c4739",
    paperSoft: "#465141",
    ink: "#f3efe7",
    olive: "#8a9472",
    red: "#b46a6a",
    line: "#566250",
    muted: "#cdc8bc"
  }

  const page = {
    fontFamily: '"Iowan Old Style", Georgia, serif',
    backgroundColor: colors.bg,
    color: colors.ink,
    minHeight: "100vh",
    margin: 0
  }

  const wrap = { width: "100%", padding: "0 36px", boxSizing: "border-box" }
  const contentWrap = { maxWidth: "1500px", margin: "0 auto" }

  const header = {
    position: "sticky",
    top: 0,
    backgroundColor: "rgba(60, 71, 57, 0.88)",
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${colors.line}`,
    zIndex: 20
  }

  const nav = {
    ...contentWrap,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    gap: "20px"
  }

  const navLinks = {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
    fontSize: "13px",
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  }

  const panel = {
    backgroundColor: colors.paper,
    border: `1px solid ${colors.line}`,
    borderRadius: "20px"
  }

  const section = { ...wrap, paddingTop: "28px", paddingBottom: "28px" }

  const menuGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px"
  }

  const button = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginRight: "12px",
    marginBottom: "10px"
  }

  const buttonPrimary = { ...button, backgroundColor: colors.olive, color: colors.bg }
  const buttonSecondary = { ...button, backgroundColor: "transparent", color: colors.ink, border: `1px solid ${colors.red}` }

  function Divider({ children }) {
    return (
      <div style={{ textAlign: "center", marginBottom: "18px", letterSpacing: "0.12em", color: colors.olive, fontSize: "14px", position: "relative", zIndex: 1 }}>
        ✦ {children} ✦
      </div>
    )
  }

  function PhotoBlock({ src, alt = "", tall = false }) {
    return (
      <div
        style={{
          ...panel,
          overflow: "hidden",
          minHeight: tall ? "420px" : "280px",
          background: `linear-gradient(135deg, ${colors.paperSoft} 0%, ${colors.paper} 100%)`
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: tall ? "420px" : "280px",
            objectFit: "cover",
            display: "block"
          }}
        />
      </div>
    )
  }

  function FeaturedCard({ item }) {
    return (
      <div style={{ ...panel, overflow: "hidden" }}>
        <PhotoBlock src={item.image} alt={item.name} />
        <div style={{ padding: "18px" }}>
          <div style={{ color: colors.olive, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
            {item.note}
          </div>
          <div style={{ fontSize: "28px", marginBottom: "8px" }}>{item.name}</div>
          <div style={{ color: colors.muted, lineHeight: 1.7 }}>{item.description}</div>
        </div>
      </div>
    )
  }

  function MenuSection({ title, items }) {
    return (
      <section style={{ marginTop: "24px" }}>
        <Divider>{title}</Divider>
        <div style={menuGrid}>
          {items.map((item) => (
            <div key={item.name} style={{ ...panel, padding: "14px" }}>
              <div style={{ fontSize: "18px", marginBottom: "6px" }}>{item.name}</div>
              <div style={{ fontSize: "14px", color: colors.muted, lineHeight: 1.65 }}>{item.ingredients}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <div style={page}>
      <header style={header}>
        <div style={wrap}>
          <div style={nav}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/logo.png"
                alt="Boom Crepes logo"
                style={{ width: "78px", height: "78px", objectFit: "contain", borderRadius: "999px" }}
              />
              <div>
                <div style={{ fontSize: "26px" }}>Boom Crepes</div>
                <div style={{ fontSize: "13px", color: colors.red }}>Not too sweet.</div>
              </div>
            </div>
            <div style={navLinks}>
              <a href="#featured" style={{ color: colors.ink, textDecoration: "none" }}>Featured</a>
              <a href="#menu" style={{ color: colors.ink, textDecoration: "none" }}>Menu</a>
              <a href="#visit" style={{ color: colors.ink, textDecoration: "none" }}>Visit</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section style={{ ...section, paddingTop: "36px" }}>
          <div style={contentWrap}>
            <div
              style={{
                ...panel,
                position: "relative",
                overflow: "hidden",
                padding: "34px",
                display: "grid",
                gridTemplateColumns: "1.05fr 0.95fr",
                gap: "18px",
                alignItems: "stretch"
              }}
            >
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "-90px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "780px",
                  height: "780px",
                  objectFit: "contain",
                  opacity: 0.07,
                  filter: "grayscale(100%) brightness(1.4)",
                  pointerEvents: "none",
                  zIndex: 0
                }}
              />

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "420px" }}>
                <Divider>Boom Crepes</Divider>
                <h1 style={{ fontSize: "64px", lineHeight: 1.02, margin: "0 0 12px" }}>Asian Style Crêpes</h1>
                <p style={{ fontSize: "24px", color: colors.red, margin: "0 0 14px" }}>Not too sweet. Just right.</p>
                <p style={{ marginTop: 0, color: colors.muted, fontSize: "19px", lineHeight: 1.8, maxWidth: "720px" }}>
                Boomcrepes started in Portland in 2017.
We’ve always loved Asian-style crepes — light, not overly sweet, and made fresh right in front of you. The kind you can hold in your hand, wrapped into a cone, filled with fruit and cream.
That’s what we wanted to bring here.
We make each crepe to order using local fruits and simple, fresh ingredients. No artificial whipped cream. We also work with a local Oregon ice cream brand, Cascade Glacier, to keep things close to home.
It only takes a few minutes, but everything is made fresh — fruit cut on the spot, cream folded in, and a thin crepe that’s just the right balance between crispy and soft.
Simple, fresh, and made with care.
Not too sweet. Just right.
.
                </p>
                <div style={{ marginTop: "18px" }}>
                  <a href="#menu" style={buttonPrimary}>View Menu</a>
                  <a href="https://instagram.com/Boomcrepe" target="_blank" rel="noreferrer" style={buttonSecondary}>Instagram</a>
                </div>
              </div>

              <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "end" }}>
                <div style={{ width: "100%" }}>
                  <PhotoBlock src="/boom.jpg" alt="Boom Crepes crème brûlée crepes in front of the Instagram frame" tall />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="featured" style={section}>
          <div style={contentWrap}>
            <Divider>Featured</Divider>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "18px" }}>
              {featuredCrepes.map((item) => (
                <FeaturedCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="menu" style={section}>
          <div style={contentWrap}>
            <div style={{ ...panel, padding: "26px" }}>
              <Divider>Menu</Divider>
              <MenuSection title="Sweet" items={sweetCrepes} />
              <MenuSection title="Crème Brûlée" items={cremeBruleeCrepes} />
              <MenuSection title="Savory" items={savoryCrepes} />
            </div>
          </div>
        </section>

        <section id="visit" style={section}>
          <div style={contentWrap}>
            <div style={{ ...panel, padding: "26px" }}>
              <Divider>Visit</Divider>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", alignItems: "stretch" }}>
                <div style={{ padding: "8px 6px" }}>
                  <h2 style={{ marginTop: 0, fontSize: "34px", marginBottom: "10px" }}>Washington Square Mall</h2>
                  <p style={{ color: colors.muted, marginBottom: "6px", fontSize: "16px" }}>12:00 pm – 7:00 pm</p>
                  <p style={{ color: colors.muted, fontSize: "16px" }}>@Boomcrepe</p>
                </div>
                <PhotoBlock src="/location.jpg" alt="Savory crepe" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
