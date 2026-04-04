// Map template slugs to their Afrify routes
export const templateMapping: { [key: string]: string } = {
  // Art Templates
  'etch': 'http://localhost:3002/afrify/templates/art/etch',
  'brutalist': 'http://localhost:3002/afrify/templates/art/brutalist',
  'sunset': 'http://localhost:3002/afrify/templates/art/sunset',
  'monochrome': 'http://localhost:3002/afrify/templates/art/monochrome',
  'mio': 'http://localhost:3002/afrify/templates/art/mio',
  'exhibit': 'http://localhost:3002/afrify/templates/art/exhibit',
  'portfolio': 'http://localhost:3002/afrify/templates/art/portfolio',
  'wrong': 'http://localhost:3002/afrify/templates/art/wrong',
  'ocean': 'http://localhost:3002/afrify/templates/art/ocean',
  'anthologist': 'http://localhost:3002/afrify/templates/art/anthologist',
  'totem': 'http://localhost:3002/afrify/templates/art/totem',
  'darkroom': 'http://localhost:3002/afrify/templates/art/darkroom',
  'clay': 'http://localhost:3002/afrify/templates/art/clay',
  'okinawa': 'http://localhost:3002/afrify/templates/art/okinawa',

  // Beauty Templates
  'beyours': 'http://localhost:3002/afrify/templates/beauty/beyours',
  'wonder': 'http://localhost:3002/afrify/templates/beauty/wonder',

  // Services Templates
  'genius': 'http://localhost:3002/afrify/templates/services/genius',
  'workflow': 'http://localhost:3002/afrify/templates/services/workflow',
  'grain': 'http://localhost:3002/afrify/templates/services/grain',
  'smile': 'http://localhost:3002/afrify/templates/services/smile',
  'panorama': 'http://localhost:3002/afrify/templates/services/panorama',
  'printing': 'http://localhost:3002/afrify/templates/services/printing',
  'sonik': 'http://localhost:3002/afrify/templates/services/sonik',
  'leap': 'http://localhost:3002/afrify/templates/services/leap',
  'aircon': 'http://localhost:3002/afrify/templates/services/aircon',
  'enthusiast': 'http://localhost:3002/afrify/templates/services/enthusiast',
  'noteable': 'http://localhost:3002/afrify/templates/services/noteable',
  'tattoo': 'http://localhost:3002/afrify/templates/services/tattoo',

  // Auto Templates
  'drive': 'http://localhost:3002/afrify/templates/auto/drive',
  'fleet': 'http://localhost:3002/afrify/templates/auto/fleet',
  'garage': 'http://localhost:3002/afrify/templates/auto/garage',
  'maranello': 'http://localhost:3002/afrify/templates/auto/maranello',
  'nitro': 'http://localhost:3002/afrify/templates/auto/nitro',
  'torque': 'http://localhost:3002/afrify/templates/auto/torque',

  // Bags Templates
  'courier': 'http://localhost:3002/afrify/templates/bags/courier',
  'leather': 'http://localhost:3002/afrify/templates/bags/leather',
  'tote': 'http://localhost:3002/afrify/templates/bags/tote',
  'voyage': 'http://localhost:3002/afrify/templates/bags/voyage',
  'prestige': 'http://localhost:3002/afrify/templates/bags/prestige',
  'galleria': 'http://localhost:3002/afrify/templates/bags/galleria',

  // Fashion Template
  'fashion': 'http://localhost:3002/afrify/templates/fashion',

  // Food Template
  'food': 'http://localhost:3002/afrify/templates/food',

  // Electronics Template
  'electronics': 'http://localhost:3002/afrify/templates/electronics',

  // Handmade Template
  'handmade': 'http://localhost:3002/afrify/templates/handmade',
};

export function getAfrifyTemplateUrl(slug: string): string {
  return templateMapping[slug] || `http://localhost:3002/afrify/templates/${slug}`;
}
