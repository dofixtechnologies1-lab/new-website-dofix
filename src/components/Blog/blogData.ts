export interface BlogItemType {
  slug: string
  date: string
  views: number
  title: string
  img: string
  content: string
}

const blogData: BlogItemType[] = [
  {
    slug: "split-ac-vs-window-ac",
    date: "Mar 27, 2022",
    views: 300000,
    title: "Split AC vs Window AC – Which Is Best for Delhi Homes?",
    img: "/images/blog/blog-01.jpg",
    content: `
Split AC and Window AC are the two most common air conditioners used in homes. 
Both have their own advantages and disadvantages depending on your budget and room size.

Split AC Advantages:
• Better cooling performance
• Quiet operation
• Modern design and aesthetics
• Energy efficient

Window AC Advantages:
• Lower price compared to split AC
• Easy installation
• Less maintenance

For Delhi homes, Split AC is generally preferred because it provides better cooling 
in extreme summer temperatures. However, if you want a budget-friendly option, 
Window AC can still be a good choice.

Before buying any AC, always consider room size, electricity consumption, and 
maintenance cost.
`
  },

  {
    slug: "ac-service-guide",
    date: "Mar 28, 2022",
    views: 250000,
    title: "Complete Guide to AC Service and Maintenance",
    img: "/images/blog/blog-02.jpg",
    content: `
Regular AC service is essential to maintain cooling performance and extend the life 
of your air conditioner.

A professional AC service usually includes:

• Cleaning of air filters
• Cleaning cooling coils
• Checking refrigerant gas pressure
• Inspecting electrical components
• Cleaning condenser unit
• Checking thermostat and airflow

Experts recommend servicing your AC at least twice a year – once before summer 
and once after the season ends.

Benefits of Regular AC Service:
• Better cooling efficiency
• Lower electricity bills
• Longer AC lifespan
• Prevention of major breakdowns

If your AC is making unusual noise, leaking water, or not cooling properly, 
it is best to call a professional AC technician immediately.
`
  },

  {
    slug: "ac-not-cooling",
    date: "Mar 29, 2022",
    views: 180000,
    title: "Why Your AC Is Not Cooling Properly",
    img: "/images/blog/blog-03.jpg",
    content: `
If your AC is not cooling properly, there could be several reasons behind it.

Common Causes of AC Cooling Problems:

1. Dirty Air Filters  
Clogged filters block airflow and reduce cooling efficiency.

2. Low Refrigerant Gas  
If the AC gas level is low due to leakage, the cooling capacity decreases.

3. Dirty Condenser Coils  
Dust and debris on condenser coils prevent proper heat exchange.

4. Faulty Compressor  
The compressor is the heart of an AC system. If it stops working, 
cooling performance drops significantly.

5. Thermostat Issues  
Incorrect thermostat settings can also cause cooling problems.

Solutions:
• Clean filters regularly
• Schedule professional AC servicing
• Check refrigerant gas levels
• Repair or replace faulty components

Regular maintenance is the best way to avoid AC cooling issues during 
peak summer months.
`
  }
]

export default blogData