const modelPapers = [
  { 
    paperId: "Model Paper 1", 
    questions: [
      { section: "Physics", topic: "Oscillations", question: "A mass-spring system with a period of 2 s will have its period increased by a factor of √2 if the mass is:", options: ["Doubled", "Halved", "Tripled", "Unchanged"], answer: "Doubled" },
      { section: "Physics", topic: "Mechanics", question: "A 5 kg block is pushed with a constant force of 20 N on a frictionless surface. What is its acceleration?", options: ["2 m/s²", "4 m/s²", "5 m/s²", "20 m/s²"], answer: "4 m/s²" },
      { section: "Physics", topic: "Mechanics", question: "A 3 kg object is acted on by a 15 N force. Its acceleration is:", options: ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"], answer: "5 m/s²" },
      { section: "Physics", topic: "Mechanics", question: "An object moving at constant velocity experiences a net force of:", options: ["0", "Nonzero", "Increasing", "Decreasing"], answer: "0" },
      { section: "Physics", topic: "Mechanics", question: "Two particles of masses 2 kg and 3 kg tied together are pulled by a 25 N force. The system’s acceleration is:", options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"], answer: "5 m/s²" },
      { section: "Physics", topic: "Mechanics", question: "A rod (length 2 m) rotates about one end with angular acceleration 2 rad/s². What is the tangential acceleration at the tip?", options: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"], answer: "4 m/s²" },
      { section: "Physics", topic: "Mechanics", question: "In a system of particles, if the net external force is zero, the center of mass will be:", options: ["At rest", "In motion with constant velocity", "Either at rest or moving with constant velocity", "Accelerated"], answer: "Either at rest or moving with constant velocity" },
      { section: "Physics", topic: "Optical Instruments", question: "An optical instrument with 20× magnification produces an image that is:", options: ["20 times larger than the object", "Reduced in size", "Virtual", "With a 20 cm focal length"], answer: "20 times larger than the object" },
      { section: "Physics", topic: "Electrostatics", question: "According to Coulomb’s law, if the distance between two charges doubles, the force becomes:", options: ["½", "¼", "⅛", "Doubled"], answer: "¼" },
      { section: "Physics", topic: "Mirrors", question: "A plane mirror always produces an image that is:", options: ["Virtual", "Real", "Inverted", "Enlarged"], answer: "Virtual" },
      { section: "Physics", topic: "Capacitance", question: "In a parallel–plate capacitor, if the plate separation is halved, the capacitance will:", options: ["Double", "Halve", "Remain the same", "Quadruple"], answer: "Double" },
      { section: "Physics", topic: "Modern Physics", question: "In the Bohr model of hydrogen, the energy levels vary as:", options: ["1/n²", "n²", "n", "1/n"], answer: "1/n²" },
      { section: "Physics", topic: "Modern Physics", question: "The radius of the nth orbit in a hydrogen atom is proportional to:", options: ["n²", "1/n²", "n", "√n"], answer: "n²" },
      { section: "Physics", topic: "Modern Physics", question: "The de Broglie wavelength λ = h/p. If a particle’s momentum doubles, its wavelength becomes:", options: ["Halved", "Doubled", "Unchanged", "Quartered"], answer: "Halved" },
      { section: "Physics", topic: "Thermodynamics", question: "A gas expands isobarically from 2 L to 5 L at 100 kPa. What is the work done?", options: ["300 J", "3000 J", "30 J", "3 J"], answer: "300 J" },
      { section: "Physics", topic: "Thermodynamics", question: "A Carnot engine operates between 500 K and 300 K. What is its efficiency?", options: ["40%", "60%", "20%", "30%"], answer: "40%" },
      { section: "Physics", topic: "Thermodynamics", question: "At constant volume, if an ideal gas’s temperature is doubled, its pressure will:", options: ["Double", "Halve", "Remain unchanged", "Quadruple"], answer: "Double" },
      { section: "Physics", topic: "Semiconductors", question: "A PN junction diode typically begins to conduct in the forward direction at approximately:", options: ["0.7 V", "1.4 V", "0.3 V", "2 V"], answer: "0.7 V" },
      { section: "Physics", topic: "Semiconductors", question: "A transistor with a current gain (β) of 100 will produce a collector current of 1 mA if the base current is:", options: ["10 μA", "1 μA", "100 μA", "0.1 μA"], answer: "10 μA" },
      { section: "Physics", topic: "Semiconductors", question: "The reverse breakdown voltage of a Zener diode is known as the:", options: ["Zener voltage", "Threshold voltage", "Saturation voltage", "Cut–in voltage"], answer: "Zener voltage" },
      { section: "Physics", topic: "Electromagnetic Induction", question: "Faraday’s law states that if magnetic flux changes twice as fast, the induced emf will be:", options: ["Doubled", "Halved", "Unchanged", "Quadrupled"], answer: "Doubled" },
      { section: "Physics", topic: "Magnetism", question: "A long straight wire’s magnetic field is given by B = μ₀I/(2πr). If r doubles, B becomes:", options: ["Halved", "Doubled", "Quartered", "Unchanged"], answer: "Halved" },
      { section: "Physics", topic: "Magnetism", question: "Currents in two parallel wires flowing in the same direction experience a force that is:", options: ["Attractive", "Repulsive", "Zero", "Varies with distance"], answer: "Attractive" },
      { section: "Physics", topic: "Magnetism", question: "A solenoid with 1000 turns, length 0.5 m, carrying 2 A produces an internal field of approximately:", options: ["5 T", "0.005 T", "0.05 T", "0.5 T"], answer: "0.005 T" },
      { section: "Physics", topic: "Waves", question: "A wave with speed 10 m/s and frequency 2 Hz has a wavelength of:", options: ["5 m", "10 m", "20 m", "2 m"], answer: "5 m" },
      { section: "Physics", topic: "Waves", question: "In a medium where sound travels at 340 m/s, a 170 Hz tone has a wavelength of:", options: ["1 m", "2 m", "0.5 m", "5 m"], answer: "2 m" },
      { section: "Physics", topic: "Miscellaneous", question: "The SI unit of force is:", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },  
      { section: "Physics", topic: "Miscellaneous", question: "The SI unit of power is:", options: ["Watt", "Joule", "Newton", "Pascal"], answer: "Watt" },    
      { section: "Physics", topic: "Miscellaneous", question: "A quantity measured in meters is a unit of:", options: ["Length", "Mass", "Time", "Temperature"], answer: "Length" },
      { section: "Physics", topic: "Miscellaneous", question: "A scalar quantity is characterized by having:", options: ["Magnitude only", "Magnitude and direction", "Direction only", "Both magnitude and direction"], answer: "Magnitude only" },
      { section: "Physics", topic: "Work, Energy & Power", question: "A constant force of 10 N moves an object 5 m in its direction. What is the work done?", options: ["10 J", "25 J", "50 J", "100 J"], answer: "50 J" },
      { section: "Physics", topic: "Work, Energy & Power", question: "A machine does 200 J of work in 10 s. What is its power output?", options: ["20 W", "200 W", "2 W", "0.5 W"], answer: "20 W" },
      { section: "Physics", topic: "Optics", question: "A converging lens has a focal length of 10 cm. To form a real image, an object must be placed:", options: ["Beyond 10 cm", "At 10 cm", "Within 10 cm", "At infinity"], answer: "Beyond 10 cm" },
      { section: "Physics", topic: "Rotational Motion", question: "A disc rotates at 5 rad/s. What is its period of rotation?", options: ["1.26 s", "1.57 s", "2 s", "0.63 s"], answer: "1.26 s" },
      { section: "Physics", topic: "AC Circuits", question: "The rms value of a 100 V peak AC voltage is:", options: ["70.7 V", "50 V", "100 V", "141 V"], answer: "70.7 V" },
      { section: "Physics", topic: "Current Electricity", question: "Using Ohm’s law (V = IR), what is the voltage across a 10 Ω resistor carrying 2 A?", options: ["20 V", "5 V", "2 V", "10 V"], answer: "20 V" },
      { section: "Physics", topic: "Current Electricity", question: "Three resistors of 5 Ω, 10 Ω, and 15 Ω connected in series have a total resistance of:", options: ["30 Ω", "15 Ω", "25 Ω", "50 Ω"], answer: "30 Ω" },
      { section: "Physics", topic: "Current Electricity", question: "Two identical resistors of resistance R connected in parallel have an equivalent resistance of:", options: ["R/2", "2R", "R", "R/4"], answer: "R/2" },
      { section: "Physics", topic: "Kinematics", question: "A car accelerates uniformly from rest to 20 m/s in 10 s. What is its acceleration?", options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"], answer: "2 m/s²" },
      { section: "Physics", topic: "Gravitation", question: "What is the gravitational force between two 1 kg masses separated by 1 m? (G = 6.67×10⁻¹¹ N·m²/kg²)", options: ["6.67×10⁻¹¹ N", "6.67×10⁻¹⁰ N", "6.67×10⁻⁹ N", "6.67×10⁻¹² N"], answer: "6.67×10⁻¹¹ N" },
      { section: "Physics", topic: "Gravitation", question: "If the distance between two masses doubles, their gravitational force becomes:", options: ["½", "¼", "⅛", "Unchanged"], answer: "¼" },
      { section: "Physics", topic: "Thermal Properties", question: "The specific heat capacity of water is approximately:", options: ["4200 J/kg·K", "1000 J/kg·K", "2000 J/kg·K", "500 J/kg·K"], answer: "4200 J/kg·K" },
      { section: "Physics", topic: "Kinetic Theory", question: "According to kinetic theory, the average kinetic energy of gas molecules is proportional to:", options: ["Temperature", "Pressure", "Volume", "Density"], answer: "Temperature" },
      { section: "Physics", topic: "Mechanical Properties", question: "A 1 m metal rod expands by 1 mm when heated by 100°C. Its coefficient of linear expansion is approximately:", options: ["1×10⁻⁵ /°C", "1×10⁻⁴ /°C", "1×10⁻⁶ /°C", "1×10⁻³ /°C"], answer: "1×10⁻⁵ /°C" },
      { section: "Physics", topic: "Mechanical Properties", question: "For an incompressible fluid in a pipe, if the pipe’s diameter halves, by what factor does the fluid’s speed increase?", options: ["2", "4", "8", "1"], answer: "4" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Benzene, due to its aromatic stability, undergoes mainly:", options: ["Electrophilic aromatic substitution", "Nucleophilic substitution", "Addition", "Elimination"], answer: "Electrophilic aromatic substitution" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "The IUPAC name for toluene is:", options: ["Methylbenzene", "Ethylbenzene", "Propylbenzene", "Benzene"], answer: "Methylbenzene" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Which of the following is an alcohol?", options: ["CH₃OH", "CH₄", "C₂H₆", "CH₃COOH"], answer: "CH₃OH" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Ethers contain the functional group:", options: ["R–O–R′", "R–OH", "R–COOH", "R–NH₂"], answer: "R–O–R′" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Aldehydes have the general formula:", options: ["RCHO", "RCOR′", "RCOOH", "RCH₂OH"], answer: "RCHO" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Ketones are represented by the formula:", options: ["RCHO", "RCOR′", "RCOOH", "RCH₂OH"], answer: "RCOR′" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Carboxylic acids contain which functional group?", options: ["–OH", "–COOH", "–NH₂", "–SH"], answer: "–COOH" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Proteins are polymers of:", options: ["Amino acids", "Nucleotides", "Monosaccharides", "Fatty acids"], answer: "Amino acids" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Alkanes are saturated hydrocarbons with the formula:", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], answer: "CₙH₂ₙ₊₂" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Isomerism in organic compounds may be:", options: ["Structural and stereoisomerism", "Only structural", "Only stereoisomerism", "Nonexistent"], answer: "Structural and stereoisomerism" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "A primary amine has the structure:", options: ["RNH₂", "R₂NH", "R₃N", "NH₃"], answer: "RNH₂" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Tollens’ reagent is used to detect:", options: ["Aldehydes", "Ketones", "Alcohols", "Carboxylic acids"], answer: "Aldehydes" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "The suffix “-ol” in organic nomenclature denotes:", options: ["Alcohol", "Aldehyde", "Ketone", "Acid"], answer: "Alcohol" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Aromatic compounds typically contain:", options: ["Conjugated ring systems", "Saturated rings", "Isolated double bonds", "No double bonds"], answer: "Conjugated ring systems" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "Ethanol is widely used as an antiseptic.", options: ["True", "False", "Sometimes", "Only in mixtures"], answer: "True" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "In SN2 reactions, the mechanism is:", options: ["Single-step bimolecular", "Two-step unimolecular", "Radical mediated", "Involves carbocation rearrangement"], answer: "Single-step bimolecular" },
      { section: "Chemistry", topic: "Organic Chemistry", question: "In SN1 reactions, the rate increases with:", options: ["More stable carbocations", "Stronger nucleophiles", "Lower solvent polarity", "Higher temperature"], answer: "More stable carbocations" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "One mole is defined as containing approximately:", options: ["6.02×10²³ particles", "1×10²³ particles", "6.02×10²² particles", "1 mole"], answer: "6.02×10²³ particles" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "The rate of a chemical reaction increases with:", options: ["Higher temperature", "Lower temperature", "Lower concentration", "Catalyst removal"], answer: "Higher temperature" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "Colligative properties depend on:", options: ["The number of solute particles", "The nature of the solute", "Only the solvent’s properties", "Pressure only"], answer: "The number of solute particles" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "Ionic equilibrium often involves:", options: ["Acid–base reactions", "Precipitation", "Both A and B", "Neither"], answer: "Both A and B" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "The enthalpy change of a reaction is typically measured by:", options: ["Calorimetry", "Spectroscopy", "Titration", "Chromatography"], answer: "Calorimetry" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "The standard electrode potential is measured relative to the:", options: ["Standard hydrogen electrode", "Calomel electrode", "Silver–chloride electrode", "None"], answer: "Standard hydrogen electrode" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "A crystalline solid is characterized by:", options: ["A highly ordered structure", "A random molecular arrangement", "Fluidity", "Amorphous properties"], answer: "A highly ordered structure" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "Surface chemistry studies phenomena at:", options: ["Interfaces", "In the bulk", "In the gas phase", "In liquids only"], answer: "Interfaces" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "Redox reactions are defined by the transfer of:", options: ["Electrons", "Protons", "Neutrons", "Photons"], answer: "Electrons" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "Atomic structure is often probed by:", options: ["Spectroscopy", "X–ray diffraction", "Both", "Neither"], answer: "Both" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "According to kinetic theory, the average kinetic energy of gas molecules is given by:", options: ["(3/2)kT", "(1/2)kT", "3kT", "kT"], answer: "(3/2)kT" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "For an ideal gas (PV = nRT), if pressure doubles at constant temperature, the volume becomes:", options: ["Halved", "Doubled", "Unchanged", "Quadrupled"], answer: "Halved" },
      { section: "Chemistry", topic: "Physical Chemistry", question: "In a redox reaction, the species that gains electrons is the:", options: ["Oxidizing agent", "Reducing agent", "Catalyst", "Inert substance"], answer: "Oxidizing agent" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "Chemical bonding involves the sharing of electrons. Which type of bond is formed by a shared pair?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], answer: "Covalent" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "A large electronegativity difference (>1.7) between two atoms generally indicates an:", options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"], answer: "Ionic bond" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "In methane (CH₄), carbon is:", options: ["sp hybridized", "sp² hybridized", "sp³ hybridized", "sp³d hybridized"], answer: "sp³ hybridized" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "P–block elements often show variable oxidation states because:", options: ["They form ionic compounds only", "Their p–orbitals are involved in bonding", "They have filled d–orbitals", "They are always metals"], answer: "Their p–orbitals are involved in bonding" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "Phosphorus pentoxide (P₄O₁₀) is typically prepared from:", options: ["White phosphorus", "Red phosphorus", "Black phosphorus", "Violet phosphorus"], answer: "White phosphorus" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "Coordination compounds usually have a coordination number of:", options: ["2", "4", "6", "8"], answer: "6" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "The vivid colors of many transition metal complexes are due to:", options: ["d–d transitions", "Charge transfer transitions", "Both A and B", "None of these"], answer: "Both A and B" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "A characteristic property of d–block elements is:", options: ["Low melting points", "Formation of colored compounds", "Only one oxidation state", "Nonmetallic behavior"], answer: "Formation of colored compounds" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "In a group of the periodic table, atomic size:", options: ["Increases down the group", "Decreases down the group", "Remains constant", "Varies randomly"], answer: "Increases down the group" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "Metallurgy is concerned with the extraction of metals from:", options: ["Their pure elements", "Ores", "Alloys", "Salts"], answer: "Ores" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "In group 1, period 3, the element is:", options: ["Lithium", "Sodium", "Potassium", "Calcium"], answer: "Sodium" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "Hydrogen is placed in group 1 because it:", options: ["Loses one electron", "Can form H⁺ ions", "Has one electron", "All of the above"], answer: "All of the above" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "Qualitative analysis in inorganic chemistry primarily involves:", options: ["Determining concentration", "Identification of ions", "Synthesis of compounds", "Reaction mechanism studies"], answer: "Identification of ions" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "An example of an amphoteric oxide is:", options: ["Na₂O", "Al₂O₃", "CaO", "MgO"], answer: "Al₂O₃" },
      { section: "Chemistry", topic: "Inorganic Chemistry", question: "The bond angle in water (H₂O) is approximately:", options: ["90°", "104.5°", "120°", "180°"], answer: "104.5°" },
      { section: "Biology", topic: "Botany - Biomolecules", question: "Starch is a polymer of:", options: ["Glucose", "Fructose", "Sucrose", "Galactose"], answer: "Glucose" },
      { section: "Biology", topic: "Botany - Biomolecules", question: "Proteins are composed of:", options: ["Amino acids", "Nucleotides", "Monosaccharides", "Fatty acids"], answer: "Amino acids" },
      { section: "Biology", topic: "Zoology - Evolution", question: "The study of fossils to understand past life is called:", options: ["Paleontology", "Archaeology", "Geology", "Anthropology"], answer: "Paleontology" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "In a dihybrid cross, the expected phenotypic ratio is:", options: ["9:3:3:1", "3:1", "1:1:1:1", "2:1"], answer: "9:3:3:1" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "Mendel’s law of segregation states that:", options: ["Alleles separate during gamete formation", "Alleles always combine equally", "Dominant alleles are always expressed", "None of these"], answer: "Alleles separate during gamete formation" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "The term 'genotype' refers to:", options: ["The genetic constitution of an organism", "The physical appearance", "The environment", "None of these"], answer: "The genetic constitution of an organism" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "Natural selection is best described as:", options: ["Survival of the fittest", "Inheritance of acquired traits", "Random mutation", "Genetic drift"], answer: "Survival of the fittest" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "In a monohybrid cross of two heterozygous individuals, the genotypic ratio is:", options: ["1:2:1", "3:1", "1:1", "2:1"], answer: "1:2:1" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "The principle of independent assortment applies to genes located on:", options: ["Different chromosomes", "The same chromosome", "Mitochondrial DNA", "None of these"], answer: "Different chromosomes" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "A mutation that results in a loss of function is typically:", options: ["Recessive", "Dominant", "Co-dominant", "Lethal"], answer: "Recessive" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "Which process is responsible for the evolution of new species?", options: ["Natural selection", "Genetic drift", "Mutation", "All of the above"], answer: "All of the above" },
      { section: "Biology", topic: "Botany - Genetics & Evolution", question: "The binomial nomenclature system was developed by:", options: ["Carl Linnaeus", "Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace"], answer: "Carl Linnaeus" },
      { section: "Biology", topic: "Zoology - Classification", question: "The branch of biology that deals with the classification of organisms is known as:", options: ["Taxonomy", "Genetics", "Physiology", "Ecology"], answer: "Taxonomy" },
      { section: "Biology", topic: "Zoology - Homeostasis", question: "The process by which organisms maintain a stable internal environment is called:", options: ["Homeostasis", "Metabolism", "Digestion", "Excretion"], answer: "Homeostasis" },
      { section: "Biology", topic: "Botany - Plant Diversity", question: "The study of plant diversity is also known as:", options: ["Botany", "Phylogeny", "Taxonomy", "Ecology"], answer: "Taxonomy" },
      { section: "Biology", topic: "Botany - Plant Diversity", question: "The structure of the plant cell wall is mainly composed of:", options: ["Cellulose", "Chitin", "Collagen", "Pectin"], answer: "Cellulose" },
      { section: "Biology", topic: "Botany - Plant Diversity", question: "A major adaptation of desert plants is:", options: ["Thick cuticles", "Broad leaves", "Shallow roots", "High transpiration rates"], answer: "Thick cuticles" },
      { section: "Biology", topic: "Botany - Plant Diversity", question: "A plant that lives for more than two years is called:", options: ["Perennial", "Annual", "Biennial", "Ephemeral"], answer: "Perennial" },
      { section: "Biology", topic: "Botany - Plant Diversity", question: "The region of the plant where new cells are produced is called the:", options: ["Meristem", "Xylem", "Phloem", "Cortex"], answer: "Meristem" },
      { section: "Biology", topic: "Botany - Plant Diversity", question: "The phenomenon where plants bend toward light is called:", options: ["Phototropism", "Geotropism", "Hydrotropism", "Thigmotropism"], answer: "Phototropism" },
      { section: "Biology", topic: "Zoology - Human Health", question: "Which disease is caused by a virus?", options: ["Tuberculosis", "Malaria", "Influenza", "Diabetes"], answer: "Influenza" },
      { section: "Biology", topic: "Zoology - Animal Husbandry", question: "Animal husbandry primarily involves the breeding and management of:", options: ["Livestock", "Pets", "Wild animals", "Insects"], answer: "Livestock" },
      { section: "Biology", topic: "Zoology - Ecology", question: "The study of relationships among living organisms is known as:", options: ["Ecology", "Taxonomy", "Anatomy", "Physiology"], answer: "Ecology" },
      { section: "Biology", topic: "Botany - Plant Reproduction", question: "In angiosperms, the male gametophyte is:", options: ["Pollen grain", "Ovule", "Seed", "Flower"], answer: "Pollen grain" },
      { section: "Biology", topic: "Botany - Plant Reproduction", question: "Double fertilization in angiosperms leads to the formation of:", options: ["Zygote and endosperm", "Two zygotes", "Seed coat", "None"], answer: "Zygote and endosperm" },
      { section: "Biology", topic: "Botany - Plant Reproduction", question: "Reproduction that involves only one parent is called:", options: ["Asexual reproduction", "Sexual reproduction", "Hybridization", "None"], answer: "Asexual reproduction" },
      { section: "Biology", topic: "Botany - Plant Reproduction", question: "Transpiration in plants involves the loss of:", options: ["Water vapor", "Oxygen", "Carbon dioxide", "Nutrients"], answer: "Water vapor" },
      { section: "Biology", topic: "Botany - Plant Reproduction", question: "In seed plants, the protective outer layer of the seed is called the:", options: ["Seed coat", "Endosperm", "Cotyledon", "Embryo"], answer: "Seed coat" },
      { section: "Biology", topic: "Botany - Plant Reproduction", question: "The process of seed germination requires:", options: ["Water, oxygen, and suitable temperature", "Only water", "Only oxygen", "Light only"], answer: "Water, oxygen, and suitable temperature" },
      { section: "Biology", topic: "Botany - Plant Reproduction", question: "A biennial plant completes its life cycle in:", options: ["Two years", "One year", "Three years", "Half a year"], answer: "Two years" },
      { section: "Biology", topic: "Zoology - Human Welfare", question: "Which method is used to control pests in agriculture?", options: ["Biological control", "Chemical control", "Cultural control", "All of the above"], answer: "All of the above" },
      { section: "Biology", topic: "Zoology - Human Welfare", question: "A major contribution of zoology to human welfare is in the field of:", options: ["Medicine", "Architecture", "Astronomy", "Geology"], answer: "Medicine" },
      { section: "Biology", topic: "Zoology - Human Reproduction", question: "In human reproduction, the site of fertilization is the:", options: ["Ovary", "Fallopian tube", "Uterus", "Cervix"], answer: "Fallopian tube" },
      { section: "Biology", topic: "Zoology - Human Reproduction", question: "In human reproduction, the site where sperm meets the egg is the:", options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"], answer: "Fallopian tube" },
      { section: "Biology", topic: "Zoology - Structural Organization", question: "The structure that connects muscles to bones is called:", options: ["Tendon", "Ligament", "Cartilage", "Joint"], answer: "Tendon" },
      { section: "Biology", topic: "Zoology - Structural Organization", question: "The basic unit of organization in animals is the:", options: ["Cell", "Tissue", "Organ", "Organ system"], answer: "Cell" },
      { section: "Biology", topic: "Zoology - Structural Organization", question: "A primary component of the animal cell membrane is:", options: ["Phospholipids", "Cellulose", "Chitin", "Keratin"], answer: "Phospholipids" },
      { section: "Biology", topic: "Zoology - Structural Organization", question: "In human anatomy, the structure that connects muscles to bones is called:", options: ["Tendon", "Ligament", "Cartilage", "Joint"], answer: "Tendon" },
      { section: "Biology", topic: "Botany - Plant Anatomy", question: "Xylem tissue is responsible for:", options: ["Water transport", "Food storage", "Photosynthesis", "Reproduction"], answer: "Water transport" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "Photosynthesis in plants occurs primarily in the:", options: ["Mitochondria", "Chloroplasts", "Vacuoles", "Nucleus"], answer: "Chloroplasts" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "The major pigment responsible for photosynthesis is:", options: ["Chlorophyll a", "Chlorophyll b", "Carotenoids", "Xanthophylls"], answer: "Chlorophyll a" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "C4 photosynthesis is an adaptation found in:", options: ["Grasses in hot, dry environments", "Tropical trees", "Aquatic plants", "None"], answer: "Grasses in hot, dry environments" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "Stomata are primarily responsible for:", options: ["Gas exchange", "Water transport", "Nutrient absorption", "Support"], answer: "Gas exchange" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "Plant hormones that promote cell elongation include:", options: ["Auxins", "Gibberellins", "Cytokinins", "Ethylene"], answer: "Gibberellins" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "Which tissue is responsible for water transport in plants?", options: ["Xylem", "Phloem", "Epidermis", "Collenchyma"], answer: "Xylem" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "The term 'photoperiodism' refers to:", options: ["Response to day length", "Response to light intensity", "Response to temperature", "None"], answer: "Response to day length" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "Which pigment is primarily responsible for capturing light energy?", options: ["Chlorophyll", "Carotenoids", "Anthocyanins", "Xanthophylls"], answer: "Chlorophyll" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "The process that converts light energy into chemical energy in plants is:", options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"], answer: "Photosynthesis" },
      { section: "Biology", topic: "Botany - Plant Physiology", question: "In C3 plants, the first product of carbon fixation is:", options: ["3-phosphoglycerate", "Oxaloacetate", "Malate", "Glucose"], answer: "3-phosphoglycerate" },
      { section: "Biology", topic: "Botany - Morphology of Flowering Plants", question: "The arrangement of flowers on a plant is referred to as:", options: ["Inflorescence", "Phyllotaxy", "Phytomer", "None"], answer: "Inflorescence" },
      { section: "Biology", topic: "Botany - Ecology & Environment", question: "In an ecosystem, the flow of energy is:", options: ["One-way", "Cyclic", "Bidirectional", "Random"], answer: "One-way" },
      { section: "Biology", topic: "Botany - Ecology & Environment", question: "Biological magnification refers to:", options: ["Increasing concentration of toxins at higher trophic levels", "Decrease in biomass", "Increase in genetic diversity", "All of these"], answer: "Increasing concentration of toxins at higher trophic levels" },
      { section: "Biology", topic: "Botany - Ecology & Environment", question: "Epiphytic plants are commonly found in:", options: ["Rainforests", "Deserts", "Tundras", "Grasslands"], answer: "Rainforests" },
      { section: "Biology", topic: "Botany - Ecology & Environment", question: "CAM photosynthesis is an adaptation to:", options: ["Water conservation", "High light intensity", "Cold environments", "Nutrient-poor soils"], answer: "Water conservation" },
      { section: "Biology", topic: "Zoology - Animal Kingdom", question: "Which of the following animals is an invertebrate?", options: ["Earthworm", "Frog", "Lizard", "Sparrow"], answer: "Earthworm" },
      { section: "Biology", topic: "Zoology - Animal Kingdom", question: "A characteristic feature of vertebrates is:", options: ["Presence of a spine", "Exoskeleton", "No internal skeleton", "Segmented body"], answer: "Presence of a spine" },
      { section: "Biology", topic: "Zoology - Human Evolution", question: "Bipedalism refers to the ability to:", options: ["Walk on two legs", "Use tools", "Speak", "Have opposable thumbs"], answer: "Walk on two legs" },
      { section: "Biology", topic: "Zoology - Human Evolution", question: "The process by which organisms become better suited to their environment is called:", options: ["Adaptation", "Mutation", "Speciation", "Genetic drift"], answer: "Adaptation" },
      { section: "Biology", topic: "Botany - Cell Structure & Function", question: "Vascular tissues in plants include:", options: ["Xylem and Phloem", "Epidermis and Cortex", "Mesophyll", "None"], answer: "Xylem and Phloem" },
      { section: "Biology", topic: "Botany - Cell Structure & Function", question: "The primary site of nutrient absorption in plants is the:", options: ["Root hairs", "Stem", "Leaves", "Flowers"], answer: "Root hairs" },
      { section: "Biology", topic: "Botany - Cell Structure & Function", question: "Which of the following is not a function of plant roots?", options: ["Anchorage", "Absorption", "Photosynthesis", "Storage"], answer: "Photosynthesis" },
      { section: "Biology", topic: "Botany - Cell Structure & Function", question: "The specialized cells forming stomata are called:", options: ["Guard cells", "Pavement cells", "Trichomes", "Bulliform cells"], answer: "Guard cells" },
      { section: "Biology", topic: "Botany - Cell Structure & Function", question: "Plant cells differ from animal cells in that they have:", options: ["Cell walls", "Chloroplasts", "Large central vacuoles", "All of the above"], answer: "All of the above" },
      { section: "Biology", topic: "Zoology - Nervous System", question: "Which of the following is not a function of the human nervous system?", options: ["Sensation", "Coordination", "Digestion", "Memory"], answer: "Digestion" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The human heart has how many chambers?", options: ["2", "3", "4", "5"], answer: "4" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which blood vessel carries oxygenated blood from the lungs to the heart?", options: ["Pulmonary vein", "Pulmonary artery", "Aorta", "Vena cava"], answer: "Pulmonary vein" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The primary function of red blood cells is to:", options: ["Transport oxygen", "Fight infection", "Clot blood", "Regulate body temperature"], answer: "Transport oxygen" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which part of the brain is responsible for balance?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"], answer: "Cerebellum" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The process by which food is broken down in the human body is called:", options: ["Digestion", "Absorption", "Metabolism", "Excretion"], answer: "Digestion" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The primary site of nutrient absorption in the human small intestine is the:", options: ["Duodenum", "Jejunum", "Ileum", "Colon"], answer: "Jejunum" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The hormone insulin is produced in the:", options: ["Pancreas", "Liver", "Adrenal cortex", "Thyroid"], answer: "Pancreas" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which of the following is a component of the human immune system?", options: ["Lymphocytes", "Erythrocytes", "Platelets", "Neurons"], answer: "Lymphocytes" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which organ is primarily responsible for detoxification in the human body?", options: ["Kidney", "Liver", "Spleen", "Lungs"], answer: "Liver" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The largest organ in the human body is:", options: ["Skin", "Liver", "Heart", "Brain"], answer: "Skin" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The smallest functional unit of the kidney is:", options: ["Nephron", "Glomerulus", "Loop of Henle", "Ureter"], answer: "Nephron" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The sinoatrial node is located in the:", options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"], answer: "Right atrium" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which vitamin is essential for blood clotting?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"], answer: "Vitamin K" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "In the human skeletal system, the bone primarily involved in red blood cell production is the:", options: ["Femur", "Ribs", "Sternum", "Vertebrae"], answer: "Sternum" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which structure in the lungs is the site of gas exchange?", options: ["Bronchi", "Trachea", "Alveoli", "Nasal cavity"], answer: "Alveoli" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The process of gas exchange in the lungs occurs in the:", options: ["Bronchi", "Trachea", "Alveoli", "Nasal cavity"], answer: "Alveoli" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which hormone regulates the sleep-wake cycle in humans?", options: ["Melatonin", "Cortisol", "Adrenaline", "Insulin"], answer: "Melatonin" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which of the following is not a function of the human liver?", options: ["Bile production", "Detoxification", "Insulin production", "Glycogen storage"], answer: "Insulin production" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "The process of digestion begins in the:", options: ["Mouth", "Stomach", "Small intestine", "Large intestine"], answer: "Mouth" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which hormone increases blood calcium levels?", options: ["Calcitonin", "Parathyroid hormone", "Insulin", "Thyroxine"], answer: "Parathyroid hormone" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which of the following is part of the human central nervous system?", options: ["Spinal cord", "Nerves", "Ganglia", "Cranial nerves"], answer: "Spinal cord" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "In the human circulatory system, the largest artery is the:", options: ["Carotid", "Aorta", "Femoral", "Pulmonary artery"], answer: "Aorta" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "In animal physiology, the process of excretion is primarily carried out by the:", options: ["Kidneys", "Liver", "Lungs", "Heart"], answer: "Kidneys" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Human blood is typically red due to the presence of:", options: ["Hemoglobin", "Myoglobin", "Chlorophyll", "Melanin"], answer: "Hemoglobin" },
      { section: "Biology", topic: "Zoology - Human Physiology", question: "Which of the following is a function of the human skeletal system?", options: ["Protection", "Blood cell production", "Mineral storage", "All of the above"], answer: "All of the above" },
      { section: "Biology", topic: "Zoology - Adaptations", question: "An adaptation seen in aquatic animals is:", options: ["Streamlined body", "Thick fur", "Large ears", "Prehensile tail"], answer: "Streamlined body" },
    ] 
  },
  { 
    paperId: "Model Paper 2", 
    questions: [
      {
        "section": "Physics",
        "topic": "Current Electricity",
        "question": "In a circuit with two switches S₁ and S₂, the voltmeter readings are V₁ (only S₁ closed), V₂ (only S₂ closed), and V₃ (both closed). The correct order of readings is:",
        "options": ["V₃ > V₂ > V₁", "V₂ > V₁ > V₃", "V₃ > V₁ > V₂", "V₁ > V₂ > V₃"],
        "answer": "V₂ > V₁ > V₃"
      },
      {
        "section": "Physics",
        "topic": "Current Electricity",
        "question": "In a potentiometer experiment comparing EMFs E₁ and E₂ (E₁ > E₂), the null point for E₂ will be:",
        "options": ["Left of C", "Right of C", "At C", "Nowhere"],
        "answer": "Left of C"
      },
      {
        "section": "Physics",
        "topic": "Magnetic Effects of Current",
        "question": "A solenoid of length L carries current I. If its length is doubled and current halved, the magnetic field at the new midpoint becomes:",
        "options": ["X/4", "X/2", "2X", "X"],
        "answer": "X/2"
      },
      {
        "section": "Physics",
        "topic": "Dual Nature of Matter",
        "question": "An alpha particle and neutron have the same de Broglie wavelength. Their velocities compare as:",
        "options": ["v_alpha > v_neutron", "v_neutron > v_alpha", "Equal velocities", "Cannot compare"],
        "answer": "v_neutron > v_alpha"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "Retarding potential for photoelectrons emitted from potassium (work function 0.3 eV) under 3300 Å light is:",
        "options": ["0.68 V", "6.8 V", "0.34 V", "3.4 V"],
        "answer": "3.4 V"
      },
      {
        "section": "Physics",
        "topic": "Nuclear Physics",
        "question": "Energy released in fusion reaction H² + H² → He⁴ (masses: H²=2.0141u, He⁴=4.0024u):",
        "options": ["12 MeV", "6 MeV", "24 MeV", "48 MeV"],
        "answer": "24 MeV"
      },
      {
        "section": "Physics",
        "topic": "Electromagnetic Waves",
        "question": "Amplifiers differ from step-up transformers in that amplifiers:",
        "options": ["Increase power", "Decrease power", "Keep power constant", "None"],
        "answer": "Increase power"
      },
      {
        "section": "Physics",
        "topic": "Thermal Physics",
        "question": "Dominant wavelength of radiation from a blackbody at 2.7 K (Stefan’s constant = 2.88 × 10⁻³ mK) lies in:",
        "options": ["Radio waves", "Microwaves", "Ultraviolet", "Infrared"],
        "answer": "Microwaves"
      },
      {
        "section": "Physics",
        "topic": "Mechanics",
        "question": "Which is a valid action-reaction pair?",
        "options": ["Gravitational force on a floating body and buoyant force", "Thrust on a rocket and exhaust gases", "Friction on a sliding body and normal force", "None"],
        "answer": "None"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "To improve both resolving and magnifying power of a telescope:",
        "options": ["Increase objective focal length and aperture", "Increase objective focal length", "Increase aperture", "Decrease wavelength"],
        "answer": "Increase objective focal length and aperture"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "A light ray reflects off two perpendicular mirrors. The final ray is:",
        "options": ["Perpendicular to original", "Parallel to original", "At 45° to original", "Any angle"],
        "answer": "Parallel to original"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "Two polaroids are inclined at sin⁻¹(3/5). The ratio of emergent to incident light intensity is:",
        "options": ["16:25", "9:25", "4:5", "8:25"],
        "answer": "8:25"
      },
      {
        "section": "Physics",
        "topic": "Semiconductors",
        "question": "In an n-p-n transistor, if 90% of emitted electrons reach the collector, the emitter current (I_E) and base current (I_B) are:",
        "options": ["I_E=9mA, I_B=1mA", "I_E=11.1mA, I_B=1.1mA", "I_E=1.1mA, I_B=11.1mA", "I_E=10mA, I_B=0mA"],
        "answer": "I_E=11.1mA, I_B=1.1mA"
      },
      {
        "section": "Physics",
        "topic": "Nuclear Physics",
        "question": "A radioactive source’s count rate drops from 240/min to 30/min in 1 hour. The half-life is:",
        "options": ["80 min", "120 min", "20 min", "30 min"],
        "answer": "20 min"
      },
      {
        "section": "Physics",
        "topic": "Nuclear Physics",
        "question": "Power output when 0.01 mg fissile material converts to energy in 1 second:",
        "options": ["1000 MW", "900 MW", "0.01 MW", "100 MW"],
        "answer": "900 MW"
      },
      {
        "section": "Physics",
        "topic": "Electromagnetism",
        "question": "For an LCR circuit’s resonant frequency to remain unchanged when capacitance doubles, inductance becomes:",
        "options": ["4L", "2L", "L/2", "L/4"],
        "answer": "L/2"
      },
      {
        "section": "Physics",
        "topic": "Mechanics",
        "question": "Dimensional formula for spring constant (K):",
        "options": ["M⁰L⁰T⁰", "MLT", "MLT⁻²", "Dimensionless"],
        "answer": "MLT⁻²"
      },
      {
        "section": "Physics",
        "topic": "Semiconductors",
        "question": "Germanium (0.3V) and silicon (0.7V) diodes are connected to 12V. Potential at terminal Y is:",
        "options": ["12 V", "11 V", "11.3 V", "11.7 V"],
        "answer": "11.7 V"
      },
      {
        "section": "Physics",
        "topic": "Mechanics",
        "question": "A 0.5 kg ball moves in a 0.4m radius circle at 4 m/s. Centripetal acceleration is:",
        "options": ["10 m/s²", "20 m/s²", "40 m/s²", "80 m/s²"],
        "answer": "40 m/s²"
      },
      {
        "section": "Physics",
        "topic": "Fluid Mechanics",
        "question": "Viscous force on a solid ball of volume 8V in the same fluid (original force F):",
        "options": ["F", "2F", "F/2", "8F"],
        "answer": "2F"
      },
      {
        "section": "Physics",
        "topic": "Waves",
        "question": "Ratio of wave velocities in two steel wires: A (diameter 2d, tension T/2) and B (diameter d, tension T):",
        "options": ["1:2", "1:√2", "1:2√2", "3:2√2"],
        "answer": "1:2√2"
      },
      {
        "section": "Physics",
        "topic": "Thermodynamics",
        "question": "Work output of a Carnot engine operating between 227°C and 127°C absorbing 6×10⁴ J heat:",
        "options": ["4.8×10⁴ J", "3.5×10⁴ J", "1.6×10⁴ J", "1.2×10⁴ J"],
        "answer": "1.2×10⁴ J"
      },
      {
        "section": "Physics",
        "topic": "Gravitation",
        "question": "Height above Earth’s surface where gravity is 1/100th of surface value (Earth radius=R):",
        "options": ["9R", "10R", "100R", "R"],
        "answer": "9R"
      },
      {
        "section": "Physics",
        "topic": "Mechanics",
        "question": "Young’s modulus for a wire (length 1m, elongation 0.02m under 12×10⁸ N/m² stress):",
        "options": ["6×10¹⁰ N/m²", "600 N/m²", "12×10¹⁰ N/m²", "24×10⁶ N/m²"],
        "answer": "6×10¹⁰ N/m²"
      },
      {
        "section": "Physics",
        "topic": "Fluid Mechanics",
        "question": "Water rises to height h in a capillary. If diameter is halved, new height is:",
        "options": ["4h", "2h", "3h", "h"],
        "answer": "2h"
      },
      {
        "section": "Physics",
        "topic": "Surface Tension",
        "question": "A small oil drop spreads over water because:",
        "options": ["Oil has higher surface tension", "Water has higher surface tension", "Oil is more viscous", "Water is more viscous"],
        "answer": "Water has higher surface tension"
      },
      {
        "section": "Physics",
        "topic": "Magnetism",
        "question": "Electromagnet core material should have:",
        "options": ["High initial permeability", "Low permeability", "Large hysteresis loop", "High coercivity"],
        "answer": "High initial permeability"
      },
      {
        "section": "Physics",
        "topic": "Kinematics",
        "question": "An airplane flies a round trip with wind perpendicular to its path. Total time is:",
        "options": ["2ℓ/V", "2ℓ/√(V²+u²)", "2Vℓ/(V²u²)", "2ℓ/√(V²−u²)"],
        "answer": "2ℓ/√(V²−u²)"
      },
      {
        "section": "Physics",
        "topic": "Projectile Motion",
        "question": "Two shells fired at angles α and β collide mid-air. Which condition is satisfied?",
        "options": ["α < β", "cosα = cosβ(t−T)", "(t−T)cosα = tcosβ", "None"],
        "answer": "None"
      },
      {
        "section": "Physics",
        "topic": "Electromagnetism",
        "question": "Refractive index of paraffin (ε_r=2.1, μ_r=1):",
        "options": ["1.45", "2.1", "1", "0"],
        "answer": "1.45"
      },
      {
        "section": "Physics",
        "topic": "Mechanics",
        "question": "Total energy of a particle in circular motion under centripetal force F = −C/r²:",
        "options": ["−C/2r", "C/2r", "C×2r", "Zero"],
        "answer": "−C/2r"
      },
      {
        "section": "Physics",
        "topic": "Thermodynamics",
        "question": "A cyclic process on a V-T diagram corresponds to which P-T diagram?",
        "options": ["Constant pressure process", "Adiabatic process", "Isochoric process", "Isothermal process"],
        "answer": "Constant pressure process"
      },
      {
        "section": "Physics",
        "topic": "Electronics",
        "question": "RMS 200V AC connected to a half-wave rectifier. Final voltage across capacitor is:",
        "options": ["500 V", "200 V", "283 V", "141 V"],
        "answer": "283 V"
      },
      {
        "section": "Physics",
        "topic": "Current Electricity",
        "question": "Meter bridge balanced at 40cm. Resistivity of wire (length 10cm, diameter 1cm):",
        "options": ["1.5π×10⁻³ Ωm", "π×10⁻³ Ωm", "2.5×10⁻³ Ωm", "2.5π×10⁻³ Ωm"],
        "answer": "1.5π×10⁻³ Ωm"
      },
      {
        "section": "Physics",
        "topic": "Communication Systems",
        "question": "Long-distance short-wave radio broadcasting uses:",
        "options": ["Ground wave", "Space wave", "Direct wave", "Sky wave"],
        "answer": "Sky wave"
      },
      {
        "section": "Physics",
        "topic": "Thermal Expansion",
        "question": "Length of mercury column in a thermometer at T°C (formula-based):",
        "options": ["V₀T(γ_m−3α_g)/[A₀(1+2α_gT)]", "V₀T(γ_m−3α_g)/[A₀(1+2α_gT)]", "V₀T(γ_m+2α_g)/[A₀(1+3α_gT)]", "V₀T(γ_m−2α_g)/[A₀(1+3α_gT)]"],
        "answer": "V₀T(γ_m−3α_g)/[A₀(1+2α_gT)]"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "Image formed between objective and eyepiece in a compound microscope is:",
        "options": ["Virtual, erect, magnified", "Real, erect, magnified", "Real, inverted, magnified", "Virtual, erect, diminished"],
        "answer": "Real, inverted, magnified"
      },
      {
        "section": "Physics",
        "topic": "Atomic Structure",
        "question": "Ratio of radius to de Broglie wavelength in nth Bohr orbit:",
        "options": ["n/2π", "n²/2π", "1/2πn", "1/2πn²"],
        "answer": "n/2π"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "Deviation (δ) vs angle of incidence (θ) for light moving from medium (μ) to air:",
        "options": ["δ increases linearly up to critical angle", "δ decreases with θ", "δ first decreases then increases", "δ is constant"],
        "answer": "δ first decreases then increases"
      },
      {
        "section": "Physics",
        "topic": "AC Circuits",
        "question": "Phase difference of π/4 between AC emf and current. Possible components:",
        "options": ["R=1kΩ, C=10μF", "R=1kΩ, C=1μF", "R=1kΩ, L=10H", "R=1kΩ, L=1H"],
        "answer": "R=1kΩ, C=10μF"
      },
      {
        "section": "Physics",
        "topic": "Electrostatics",
        "question": "27 identical mercury drops (potential 10 units) combine. Potential of large drop:",
        "options": ["45 units", "135 units", "270 units", "90 units"],
        "answer": "90 units"
      },
      {
        "section": "Physics",
        "topic": "Electromagnetic Induction",
        "question": "Current direction in loops moving into a uniform magnetic field:",
        "options": ["Clockwise in loop (I)", "Clockwise in loop (II)", "Clockwise in loop (III)", "None"],
        "answer": "None"
      },
      {
        "section": "Physics",
        "topic": "Gravitation",
        "question": "Radius of a geostationary satellite’s orbit:",
        "options": ["(gR²T²/4π²)^(1/3)", "(gR/4π²T²)^(1/2)", "(gRT/2π)^(1/3)", "(gR/2πT)^(1/2)"],
        "answer": "(gR²T²/4π²)^(1/3)"
      },
      {
        "section": "Physics",
        "topic": "Waves",
        "question": "Assertion (A): Frequency of guitar string ≠ sound wave frequency. Reason (B): Wave speed depends on medium.",
        "options": ["Both correct", "A correct", "B correct", "Both wrong"],
        "answer": "B correct"
      },
      {
        "section": "Physics",
        "topic": "Rotational Motion",
        "question": "A disc rolls without slipping. Acceleration (a) and velocity (v) of the lowest point:",
        "options": ["a=0, v=0", "a=0, v≠0", "a≠0, v=0", "a≠0, v≠0"],
        "answer": "a≠0, v=0"
      },
        {
          "section": "Chemistry",
          "topic": "Basic Concepts of Chemistry",
          "question": "When a metal is burnt, its weight increases by 24%. The equivalent weight of the metal is:",
          "options": ["2", "24", "33.3", "76"],
          "answer": "33.3"
        },
        {
          "section": "Chemistry",
          "topic": "Structure of Atom",
          "question": "In which species is the number of protons greater than neutrons but less than electrons?",
          "options": ["D₃O⁺", "SO₂", "S²⁻", "OH⁻"],
          "answer": "OH⁻"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Bonding and Molecular Structure",
          "question": "The correct order of decreasing dipole moment for (I) toluene, (II) m-dichlorobenzene, (III) o-dichlorobenzene, (IV) p-dichlorobenzene is:",
          "options": ["IV < II < I < III", "IV < I < II < III", "I < IV < II < III", "IV < I < III < II"],
          "answer": "IV < I < II < III"
        },
        {
          "section": "Chemistry",
          "topic": "Solutions",
          "question": "Which pair of substances has the same molar heat of fusion (ΔH_fusion)?",
          "options": ["A and C", "B and E", "D and E", "C and D"],
          "answer": "D and E"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Basics",
          "question": "The decreasing order of base strength for OH⁻, NH₂⁻, HC≡C⁻, and CH₃CH₂⁻ is:",
          "options": ["CH₃CH₂⁻ > NH₂⁻ > HC≡C⁻ > OH⁻", "HC≡C⁻ > CH₃CH₂⁻ > NH₂⁻ > OH⁻", "OH⁻ > NH₂⁻ > HC≡C⁻ > CH₃CH₂⁻", "NH₂⁻ > HC≡C⁻ > OH⁻ > CH₃CH₂⁻"],
          "answer": "CH₃CH₂⁻ > NH₂⁻ > HC≡C⁻ > OH⁻"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Kinetics",
          "question": "The effect of a catalyst on a reaction system is:",
          "options": ["Increases forward reaction rate only", "Increases reverse reaction rate only", "Increases both forward and reverse rates equally", "Decreases reverse reaction rate"],
          "answer": "Increases both forward and reverse rates equally"
        },
        {
          "section": "Chemistry",
          "topic": "Solutions",
          "question": "A solution of liquids A (P° = 80 mm) and B (P° = 120 mm) has a vapor pressure of 100 mm at X_A = 0.4. This indicates:",
          "options": ["Ideal behavior", "Positive deviation", "Negative deviation", "Mixed deviation"],
          "answer": "Negative deviation"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Halogens",
          "question": "The number of isomers for C₂BrFClI is:",
          "options": ["3", "4", "5", "6"],
          "answer": "6"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Oxygen Compounds",
          "question": "An organic compound C₇H₈O soluble in NaOH but not NaHCO₃, forming a tribromo product with Br₂ water, is:",
          "options": ["o-Cresol", "m-Cresol", "p-Cresol", "Any of these"],
          "answer": "m-Cresol"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Reaction Mechanisms",
          "question": "In the reaction of trans-2-butene and cis-2-butene with HCO₃H, products A and B are formed by:",
          "options": ["Syn addition (A: racemic, B: meso)", "Anti addition (A: racemic, B: meso)", "Anti addition (A: meso, B: racemic)", "Syn addition (A: meso, B: racemic)"],
          "answer": "Anti addition (A: meso, B: racemic)"
        },
        {
          "section": "Chemistry",
          "topic": "Reaction Intermediates",
          "question": "Which intermediate is NOT formed in the Reimer-Tiemann reaction of phenol with alkaline chloroform?",
          "options": ["Dichlorocarbene", "Trichloromethyl anion", "Dichloromethyl anion", "CCl₂⁻"],
          "answer": "CCl₂⁻"
        },
        {
          "section": "Chemistry",
          "topic": "Amines and Amides",
          "question": "Which statement about acetamide is true?",
          "options": ["Acts as a weak acid and base", "Decomposes to CO and HCl", "Cannot be reduced to amine", "None"],
          "answer": "Acts as a weak acid and base"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Bonding",
          "question": "Hybridization of chlorine in ClO₂⁻ is:",
          "options": ["sp³", "sp²", "sp", "dsp³"],
          "answer": "sp³"
        },
        {
          "section": "Chemistry",
          "topic": "d- and f-Block Elements",
          "question": "Which ion has the highest magnetic moment?",
          "options": ["V³⁺", "Cr³⁺", "Fe³⁺", "Co³⁺"],
          "answer": "Fe³⁺"
        },
        {
          "section": "Chemistry",
          "topic": "Coordination Compounds",
          "question": "The number of ions produced by [Pt(NH₃)₄Cl₂]Cl₂ in aqueous solution is:",
          "options": ["2", "3", "4", "5"],
          "answer": "3"
        },
        {
          "section": "Chemistry",
          "topic": "Isoelectronic Species",
          "question": "O₂²⁻ is isoelectronic with:",
          "options": ["H₂", "N₂", "F₂", "S"],
          "answer": "F₂"
        },
        {
          "section": "Chemistry",
          "topic": "Periodic Trends",
          "question": "Element with the highest electropositivity:",
          "options": ["Copper", "Caesium", "Barium", "Chromium"],
          "answer": "Caesium"
        },
        {
          "section": "Chemistry",
          "topic": "Periodic Properties",
          "question": "Basic character of oxides across the periodic table:",
          "options": ["Decreases left to right, increases top to bottom", "Increases right to left, decreases top to bottom", "Decreases left to right, increases bottom to top", "Decreases left to right, increases top to bottom"],
          "answer": "Decreases left to right, increases top to bottom"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Formulae",
          "question": "An element X forms XCl₃, X₂O₅, and Ca₃X₂ but not XCl₅. X is:",
          "options": ["Boron", "Nitrogen", "Aluminum", "Phosphorus"],
          "answer": "Nitrogen"
        },
        {
          "section": "Chemistry",
          "topic": "Mole Concept",
          "question": "Number of water molecules in one drop (20 drops = 1 mL) at STP:",
          "options": ["6.023×10²³", "1.376×10²⁶", "1.344×10¹⁸", "4.34×10³⁰"],
          "answer": "1.344×10¹⁸"
        },
        {
          "section": "Chemistry",
          "topic": "Gaseous State",
          "question": "Mole ratio of H₂:CH₄ in a gaseous mixture effusing through a hole (given data):",
          "options": ["1:2", "2:1", "2:3", "1:1"],
          "answer": "1:1"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Bonding",
          "question": "Wavelength of light required to break Cl-Cl bond (Bond energy = 243 kJ/mol):",
          "options": ["4.91×10⁻⁷ m", "4.11×10⁻⁶ m", "8.81×10⁻³¹ m", "6.26×10⁻²¹ m"],
          "answer": "4.91×10⁻⁷ m"
        },
        {
          "section": "Chemistry",
          "topic": "Thermochemistry",
          "question": "Heat of neutralization ratio for HA and HB with KOH (given heat changes):",
          "options": ["3:1", "1:3", "4:1", "1:4"],
          "answer": "4:1"
        },
        {
          "section": "Chemistry",
          "topic": "Gaseous State",
          "question": "Percentage change in partial pressure of O₂ after removing 1 mole from a container:",
          "options": ["16%", "50%", "26%", "No change"],
          "answer": "26%"
        },
        {
          "section": "Chemistry",
          "topic": "Thermodynamics",
          "question": "For the reaction Zn + H₂SO₄ in a bomb calorimeter, ΔU and W are:",
          "options": ["ΔU > 0, W = 0", "ΔU < 0, W = 0", "ΔU < 0, W > 0", "ΔU > 0, W < 0"],
          "answer": "ΔU < 0, W = 0"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Reaction Pathways",
          "question": "The end product of a reaction sequence involving LiAlH₄, PCl₅, NaCN, and H₃O⁺ is:",
          "options": ["Carboxylic acid", "Ester", "Amide", "Nitrile"],
          "answer": "Carboxylic acid"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Equilibrium",
          "question": "Degree of dissociation of PCl₅ at 230°C (vapor density data):",
          "options": ["6.8%", "68%", "46%", "64%"],
          "answer": "68%"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Equilibrium",
          "question": "Percentage of isobutane in equilibrium (Kc = 3.0):",
          "options": ["75%", "90%", "30%", "60%"],
          "answer": "75%"
        },
        {
          "section": "Chemistry",
          "topic": "Acid-Base Equilibria",
          "question": "pH of a solution formed by mixing 100 mL 0.2 M CH₃COOH with 100 mL 0.2 M NaOH (pKa = 4.74):",
          "options": ["4.74", "8.87", "9.10", "8.57"],
          "answer": "8.87"
        },
        {
          "section": "Chemistry",
          "topic": "Electrochemistry",
          "question": "In electrolytic refining of zinc:",
          "options": ["Graphite anode", "Impure metal at cathode", "Metal ion reduced at anode", "Acidified ZnSO₄ electrolyte"],
          "answer": "Acidified ZnSO₄ electrolyte"
        },
        {
          "section": "Chemistry",
          "topic": "Redox Reactions",
          "question": "H₂O₂ acts as a reducing agent in:",
          "options": ["SO₂ → H₂SO₄", "2KI → I₂", "Ag₂O → Ag", "PbS → PbSO₄"],
          "answer": "Ag₂O → Ag"
        },
        {
          "section": "Chemistry",
          "topic": "Periodic Trends",
          "question": "Least basic oxide is formed by:",
          "options": ["Mg", "Ba", "Be", "Ra"],
          "answer": "Be"
        },
        {
          "section": "Chemistry",
          "topic": "Periodic Properties",
          "question": "Most common oxidation states for lead and silicon:",
          "options": ["+2, +4", "+4, +4", "+2, +2", "+4, +2"],
          "answer": "+2, +4"
        },
        {
          "section": "Chemistry",
          "topic": "Electrochemistry",
          "question": "Potential required to deposit copper (1×10⁻⁹ M Cu²⁺ left) in a solution of CuSO₄, NiSO₄, and H₂SO₄:",
          "options": ["0.04 V", "0.4 V", "0.07 V", "0.007 V"],
          "answer": "0.07 V"
        },
        {
          "section": "Chemistry",
          "topic": "Coordination Compounds",
          "question": "Crystal field stabilization energy (CFSE) is highest for:",
          "options": ["[CoF₄]²⁻", "[Co(NCS)₄]²⁻", "[Co(NH₃)₆]³⁺", "[CoCl₄]²⁻"],
          "answer": "[Co(NH₃)₆]³⁺"
        },
        {
          "section": "Chemistry",
          "topic": "Organometallics",
          "question": "Which is NOT an organometallic compound?",
          "options": ["cis-Platin", "Ferrocene", "Zeise’s salt", "Grignard reagent"],
          "answer": "cis-Platin"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Formulae",
          "question": "A metal forming M₂O₃ and MN likely has atomic number:",
          "options": ["11", "12", "13", "19"],
          "answer": "13"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Bonding",
          "question": "X-X bond dissociation energy is minimum in:",
          "options": ["F₂", "Cl₂", "Br₂", "I₂"],
          "answer": "I₂"
        },
        {
          "section": "Chemistry",
          "topic": "d- and f-Block Elements",
          "question": "Pair with the same magnetic moment:",
          "options": ["MnCl₂, CuSO₄", "CuCl₂, TiCl₃", "TiO₂, CuSO₄", "TiCl₃, NiCl₂"],
          "answer": "CuCl₂, TiCl₃"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Reaction Mechanisms",
          "question": "Increasing order of hydrolysis for (i) to (iv) alkyl halides:",
          "options": ["(i)<(iii)<(ii)<(iv)", "(i)<(iv)<(iii)<(ii)", "(iv)<(ii)<(iii)<(i)", "(i)<(iii)<(iv)<(ii)"],
          "answer": "(i)<(iii)<(iv)<(ii)"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Oxygen Compounds",
          "question": "Most readily dehydrated compound in acidic conditions:",
          "options": ["Compound with tertiary carbocation stability", "Compound with primary carbocation", "Compound with conjugated double bonds", "Compound with electron-withdrawing groups"],
          "answer": "Compound with tertiary carbocation stability"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Reaction Pathways",
          "question": "Product of Baeyer-Villiger oxidation followed by saponification:",
          "options": ["Carboxylic acid", "Ketone", "Ester", "Alcohol"],
          "answer": "Carboxylic acid"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry - Reaction Pathways",
          "question": "Final product (E) in the reaction sequence: Bromination → Sn/HCl → NaNO₂/HCl → H₃PO₂ → KMnO₄/OH⁻:",
          "options": ["COOH", "NO₂", "Br", "CH₃"],
          "answer": "COOH"
        },
        {
          "section": "Chemistry",
          "topic": "Atomic Structure",
          "question": "Wavelength of photon emitted during transition from 4E/3 to E level:",
          "options": ["λ/3", "λ", "4λ/3", "3λ"],
          "answer": "3λ"
        },
        {
          "section": "Chemistry",
          "topic": "Basic Concepts of Chemistry",
          "question": "When a metal is burnt, its weight increases by 24%. The equivalent weight of the metal is:",
          "options": ["2", "24", "33.3", "76"],
          "answer": "33.3"
        },
          {
            "section": "Biology",
            "topic": "Cell Structure and Function",
            "question": "Diffusion pressure is directly proportional to:",
            "options": ["Concentration of molecules", "Kinetic energy", "Concentration gradient", "All of these"],
            "answer": "All of these"
          },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "Formalin-preserved Spirogyra in hypertonic sugar solution will:",
            "options": ["Lose turgidity", "Gain turgidity", "Plasmolyze", "No change"],
            "answer": "No change"
          },
          {
            "section": "Biology",
            "topic": "Cell Structure and Function",
            "question": "Diffusion pressure is directly proportional to:",
            "options": ["Concentration of molecules", "Kinetic energy", "Concentration gradient", "All of these"],
            "answer": "All of these"
          },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "Formalin-preserved Spirogyra in hypertonic sugar solution will:",
            "options": ["Lose turgidity", "Gain turgidity", "Plasmolyze", "No change"],
            "answer": "No change"
          },
          {
            "section": "Biology",
            "topic": "Genetics and Evolution",
            "question": "Nif genes occur in:",
            "options": ["Rhizobium", "Aspergillus", "Penicillium", "Streptococcus"],
            "answer": "Rhizobium"
          },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "In the absorption spectrum of chlorophyll:",
            "options": ["Chl-b peaks at lower wavelength than Chl-a in blue region", "Chl-a peak is higher in red region", "Chl-a peak is higher in blue region", "Chl-a peaks at lower wavelength in red region"],
            "answer": "Chl-a peak is higher in red region"
          },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "In the Calvin cycle, how many PGAL molecules, ATP, and NADPH₂ are required?",
            "options": ["3 PGAL, 3 ATP, 3 NADPH₂", "6 PGAL, 6 ATP, 6 NADPH₂", "18 PGAL, 18 ATP, 18 NADPH₂", "9 PGAL, 9 ATP, 9 NADPH₂"],
            "answer": "6 PGAL, 6 ATP, 6 NADPH₂"
          },
          {
            "section": "Biology",
            "topic": "Enzymes",
            "question": "Enzyme that catalyzes phosphorylation without ATP:",
            "options": ["Glyceraldehyde 3-phosphate dehydrogenase", "Glucose 6-phosphotransferase", "Phosphofructokinase", "Pyruvate kinase"],
            "answer": "Glyceraldehyde 3-phosphate dehydrogenase"
          },
          {
            "section": "Biology",
            "topic": "Respiration in Plants",
            "question": "FAD is an electron acceptor during oxidation of:",
            "options": ["α-ketoglutaric acid → Succinyl CoA", "Succinic acid → Fumaric acid", "Succinyl CoA → Succinic acid", "Fumaric acid → Malic acid"],
            "answer": "Succinic acid → Fumaric acid"
          },
          {
            "section": "Biology",
            "topic": "Plant Growth and Development",
            "question": "Gibberellin induces flowering in:",
            "options": ["Long-day plants under short-day conditions", "Short-day plants under long-day conditions", "Day-neutral plants", "All plants"],
            "answer": "Long-day plants under short-day conditions"
          },
          {
            "section": "Biology",
            "topic": "Plant Hormones",
            "question": "Match the hormone with its example:",
            "options": ["Auxin: GA₃", "Gibberellin: Indole acetic acid", "Cytokinin: Zeatin", "Dormin: Abscisic acid"],
            "answer": "Cytokinin: Zeatin"
          },
          {
            "section": "Biology",
            "topic": "Biotechnology",
            "question": "A synthetic seed consists of:",
            "options": ["Somatic embryo without capsule", "Sodium alginate capsule", "Mercuric chloride capsule", "Somatic embryo + nutrients + sodium alginate capsule"],
            "answer": "Somatic embryo + nutrients + sodium alginate capsule"
          },
          {
            "section": "Biology",
            "topic": "Biotechnology",
            "question": "Rotenone, a natural insecticide, is obtained from:",
            "options": ["Azadirachta indica", "Derris sp.", "Bacillus thuringiensis", "Phytophthora palmivora"],
            "answer": "Derris sp."
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Major sources of biofertilizers are:",
            "options": ["Bacteria only", "Cyanobacteria only", "Bacteria, cyanobacteria, and fungi", "Fungi only"],
            "answer": "Bacteria, cyanobacteria, and fungi"
          },
          {
            "section": "Biology",
            "topic": "Biotechnology",
            "question": "Enzyme used in PCR:",
            "options": ["Restriction enzymes", "Reverse transcriptase", "Ligase", "DNA polymerase"],
            "answer": "DNA polymerase"
          },
          {
            "section": "Biology",
            "topic": "Biotechnology",
            "question": "The 'rop' gene in plasmid pBR322 codes for:",
            "options": ["Antibiotic resistance", "Replication proteins", "Foreign DNA insertion", "Selection marker"],
            "answer": "Replication proteins"
          },
          {
            "section": "Biology",
            "topic": "Human Health",
            "question": "α-1 Antitrypsin is used to treat:",
            "options": ["Arthritis", "Emphysema", "Diabetes", "Hypertension"],
            "answer": "Emphysema"
          },
          {
            "section": "Biology",
            "topic": "Plant Pathology",
            "question": "Nematode infecting tobacco roots:",
            "options": ["Truffles", "Meloidogyne incognitia", "Penicillium", "Rhizopus"],
            "answer": "Meloidogyne incognitia"
          },
          {
            "section": "Biology",
            "topic": "Biotechnology",
            "question": "Oil spill bioremediation uses a species of:",
            "options": ["Pseudomonas", "Trichoderma", "Xanthomonas", "Bacillus"],
            "answer": "Pseudomonas"
          },
          {
            "section": "Biology",
            "topic": "Biomolecules",
            "question": "Ester bond is present between:",
            "options": ["Sugar and phosphate", "Sugar and nitrogen base", "Two nucleotides", "Nitrogen base and phosphate"],
            "answer": "Sugar and phosphate"
          },
          {
            "section": "Biology",
            "topic": "Molecular Biology",
            "question": "Nucleic acids are fragmented by:",
            "options": ["Polymerases", "Nucleases", "Proteases", "Ligases"],
            "answer": "Nucleases"
          },
          {
            "section": "Biology",
            "topic": "Molecular Biology",
            "question": "An mRNA with 66 bases (last three UAG) has functional codons:",
            "options": ["22 codons, 21 amino acids", "21 codons, 22 amino acids", "22 codons, 22 amino acids", "21 codons, 21 amino acids"],
            "answer": "21 codons, 21 amino acids"
          },
          {
            "section": "Biology",
            "topic": "Plant Reproduction",
            "question": "Nawaschin discovered triple fusion in:",
            "options": ["Lilium and Fritillaria", "Allium and Scilla", "Allium and Lilium", "Fritillaria and Colchicum"],
            "answer": "Lilium and Fritillaria"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Incorrect match for plant uses:",
            "options": ["Arachis: Oil and fodder", "Crotalaria: Fiber and fodder", "Trigonella: Leaf vegetable", "Pterocarpus: Fodder and manure"],
            "answer": "Pterocarpus: Fodder and manure"
          },
          {
            "section": "Biology",
            "topic": "Taxonomy",
            "question": "Binomial system was popularized by:",
            "options": ["Linnaeus", "Theophrastus", "Hutchinson", "Bentham & Hooker"],
            "answer": "Linnaeus"
          },
          {
            "section": "Biology",
            "topic": "History of Biology",
            "question": "Correct match for discoveries:",
            "options": ["Priestly: O₂/CO₂ exchange", "Hanning: Phylogenetic classification", "Hutchinson: Organ culture", "Benson & Basham: Plant tissues"],
            "answer": "Priestly: O₂/CO₂ exchange"
          },
          {
            "section": "Biology",
            "topic": "Morphology of Plants",
            "question": "Pair showing similar modified structures:",
            "options": ["Lathyrus tendril & Smilax tendril", "Ziziphus spine & Argemone spine", "Smilax tendril & Ziziphus spine", "Argemone spine & Lathyrus tendril"],
            "answer": "Ziziphus spine & Argemone spine"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "Potato tuber is an underground stem because it has:",
            "options": ["Stored food", "Axillary buds", "No roots", "Chlorophyll"],
            "answer": "Axillary buds"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "Phylloclades are:",
            "options": ["Modified roots", "Modified stems for photosynthesis", "Found in all xerophytes", "Leaf-like structures"],
            "answer": "Modified stems for photosynthesis"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "Medullary rays are found in:",
            "options": ["Dicot leaf", "Monocot stem", "Dicot stem", "Monocot root"],
            "answer": "Dicot stem"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "Incorrect statement about monocot stem vascular bundles:",
            "options": ["Scattered in ground tissue", "Cambium present", "Y-shaped xylem", "Bundle sheath present"],
            "answer": "Cambium present"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "Heartwood and sapwood differ due to:",
            "options": ["Climatic changes", "Seasonal water needs", "Non-functional wood accumulation", "Spring vs autumn growth"],
            "answer": "Non-functional wood accumulation"
          },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "Vein endings, epithem, and water stomata are part of:",
            "options": ["Transpiration", "Guttation", "Photosynthesis", "Respiration"],
            "answer": "Guttation"
          },
          {
            "section": "Biology",
            "topic": "Cell Division",
            "question": "Two chromatids of a metaphase chromosome represent:",
            "options": ["Replicated chromosomes", "Homologous chromosomes", "Maternal/paternal chromosomes", "Non-homologous chromosomes"],
            "answer": "Replicated chromosomes"
          },
          {
            "section": "Biology",
            "topic": "Genetics",
            "question": "Daughter cells of meiosis I:",
            "options": ["Haploid", "Diploid", "Same chromosome number as parent", "Half chromosomes due to disjunction"],
            "answer": "Haploid"
          },
          {
            "section": "Biology",
            "topic": "Genetics",
            "question": "Part of chromatid beyond secondary constriction is called:",
            "options": ["Satellite", "Centromere", "Nucleolar organizer", "Balbiani ring"],
            "answer": "Satellite"
          },
          {
            "section": "Biology",
            "topic": "Plant Reproduction",
            "question": "Dichogamy favors cross-pollination because:",
            "options": ["Anthers/stigmas at different levels", "Stamens/stigmas mature at different times", "Pollen cannot germinate", "Stigma structure blocks self-pollination"],
            "answer": "Stamens/stigmas mature at different times"
          },
          {
            "section": "Biology",
            "topic": "Human Diseases",
            "question": "Bacterial diseases include:",
            "options": ["Typhoid, TB, pneumonia", "AIDS, rabies, smallpox", "Polio, hepatitis, scurvy", "Measles, malaria, syphilis"],
            "answer": "Typhoid, TB, pneumonia"
          },
          {
            "section": "Biology",
            "topic": "Molecular Biology",
            "question": "Operon concept applies to:",
            "options": ["All prokaryotes", "Prokaryotes and some eukaryotes", "All eukaryotes", "Prokaryotes and protozoans"],
            "answer": "All prokaryotes"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Correct example of mutualism:",
            "options": ["Mycorrhiza", "Lichens (algae + fungi)", "Orchids on trees", "Cuscuta on host"],
            "answer": "Lichens (algae + fungi)"
          },
          {
            "section": "Biology",
            "topic": "Plant Diversity",
            "question": "Correct match for algae:",
            "options": ["Phaeophyceae: Mannitol", "Rhodophyceae: Dictyota", "Chlorophyceae: Non-motile gametes", "Rhodophyceae: r-phycoerythrin"],
            "answer": "Phaeophyceae: Mannitol"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Keystone species are important because they:",
            "options": ["Survive harsh conditions", "Indicate soil minerals", "Support ecosystem stability", "Are rare"],
            "answer": "Support ecosystem stability"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Tropical dense forests result from:",
            "options": ["High rainfall + high temperature", "High rainfall + low temperature", "Low rainfall + high temperature", "Low rainfall + low temperature"],
            "answer": "High rainfall + high temperature"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Red sea coloration in marine ecosystems is due to:",
            "options": ["Rhodophyta", "Dinoflagellates", "Diatoms", "Blue-green algae"],
            "answer": "Dinoflagellates"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "Parts of stomatal apparatus (A-D) are correctly identified as:",
            "options": ["Epidermal cell, subsidiary cell, guard cell, stomatal aperture", "Guard cell, stomatal aperture, subsidiary cell, epidermal cell", "Subsidiary cell, epidermal cell, stomatal aperture, guard cell", "Epidermal cell, guard cell, stomatal aperture, subsidiary cell"],
            "answer": "Epidermal cell, guard cell, stomatal aperture, subsidiary cell"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "Ground tissue includes:",
            "options": ["Tissues internal to endodermis", "Tissues external to endodermis", "All tissues except epidermis and vascular bundles", "Epidermis and cortex"],
            "answer": "All tissues except epidermis and vascular bundles"
          },
          {
            "section": "Biology",
            "topic": "Animal Diversity",
            "question": "Foot divided into arms is seen in:",
            "options": ["Sepia", "Pila", "Ostrea", "Chiton"],
            "answer": "Sepia"
          },
          {
            "section": "Biology",
            "topic": "Animal Physiology",
            "question": "Germ cells in sponges originate from:",
            "options": ["Ectoderm", "Endoderm", "Mesoderm", "Both ectoderm and endoderm"],
            "answer": "Both ectoderm and endoderm"
          },
          {
            "section": "Biology",
            "topic": "Animal Physiology",
            "question": "Postanal tail is present in:",
            "options": ["Chordates", "Vertebrates", "Invertebrates", "All animals"],
            "answer": "Chordates"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Schwann cells are part of:",
            "options": ["Areolar tissue", "Nervous tissue", "Epithelial tissue", "Muscle tissue"],
            "answer": "Nervous tissue"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Signet ring-shaped cells are:",
            "options": ["Mast cells", "Adipocytes", "Osteocytes", "Melanocytes"],
            "answer": "Adipocytes"
          },
          {
            "section": "Biology",
            "topic": "Biomolecules",
            "question": "Amino acid with hydroxymethyl group:",
            "options": ["Serine", "Proline", "Alanine", "Arginine"],
            "answer": "Serine"
          },
          {
            "section": "Biology",
            "topic": "Biomolecules",
            "question": "Incorrect statement:",
            "options": ["Amino acids are substituted methanes", "Glycerol is trihydroxy propane", "Lysine is neutral", "Lecithin is a phospholipid"],
            "answer": "Lysine is neutral"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Cartilage repairing nasal septum damage:",
            "options": ["Elastic cartilage", "Fibrous cartilage", "Hyaline cartilage", "Calcified cartilage"],
            "answer": "Hyaline cartilage"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Absorbed as such in the alimentary canal:",
            "options": ["Egg albumin", "Polysaccharides", "Fat-soluble vitamins", "Proteins"],
            "answer": "Fat-soluble vitamins"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Match digestive system parts with secretions:",
            "options": ["Duodenum: Zymogen", "Parietal cells: HCl", "Paneth cells: Secretin", "Chief cells: Lysozyme"],
            "answer": "Parietal cells: HCl"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Respiratory center in the brain is stimulated by:",
            "options": ["CO₂ in venous blood", "O₂ in arterial blood", "CO₂ in arterial blood", "O₂ in venous blood"],
            "answer": "CO₂ in arterial blood"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Respiration is controlled by:",
            "options": ["Cerebellum", "Medulla oblongata", "Hypothalamus", "Cerebrum"],
            "answer": "Medulla oblongata"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Cardiac cycle duration is:",
            "options": ["Directly proportional to heart rate", "Inversely proportional to heart rate", "Unrelated to heart rate", "Fixed at 0.8 seconds"],
            "answer": "Inversely proportional to heart rate"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Artificial pacemaker is grafted at:",
            "options": ["SA node", "AV node", "Purkinje fibers", "Bundle of His"],
            "answer": "SA node"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Unsuitable test tube for blood storage:",
            "options": ["Calcium bicarbonate tube", "Chilled tube", "Heparin tube", "Sodium oxalate tube"],
            "answer": "Calcium bicarbonate tube"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Yellow urine color is due to:",
            "options": ["Urochrome", "Urochronogen", "Carotene", "Bilirubin"],
            "answer": "Urochrome"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Sweating helps regulate:",
            "options": ["Salt balance", "Body temperature", "Skin bacteria", "Water balance"],
            "answer": "Body temperature"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Bones involved in running:",
            "options": ["Femur, tibia, metatarsals", "Pelvis, ulna, tarsals", "Sternum, femur, fibula", "Tarsals, femur, tibia"],
            "answer": "Femur, tibia, metatarsals"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Correctly matched joint pair:",
            "options": ["Cartilaginous joint: Skull bones", "Hinge joint: Vertebrae", "Fibrous joint: Phalanges", "Gliding joint: Zygapophyses"],
            "answer": "Gliding joint: Zygapophyses"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Excessive vagus nerve stimulation causes:",
            "options": ["Hoarse voice", "Peptic ulcers", "Improved digestion", "Irregular diaphragm contractions"],
            "answer": "Peptic ulcers"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Homeostatic regulation involves:",
            "options": ["Receptors, effectors, integrators", "Brain, spinal cord, effectors", "Receptors, integrators, effectors", "Sensors, processors, responders"],
            "answer": "Receptors, integrators, effectors"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Damaged dorsal spinal nerve root affects:",
            "options": ["No impulse transmission", "Slow transmission", "Fast transmission", "No effect"],
            "answer": "No impulse transmission"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Removal of ovaries decreases:",
            "options": ["Oxytocin", "Prolactin", "Estrogen", "GnRH"],
            "answer": "Estrogen"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "MSH is secreted by:",
            "options": ["Anterior pituitary", "Middle pituitary", "Posterior pituitary", "Hypothalamus"],
            "answer": "Middle pituitary"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Effect of GnRH:",
            "options": ["Stimulates androgen synthesis", "Triggers milk secretion", "Induces fetal ejection", "Stimulates gluconeogenesis"],
            "answer": "Stimulates androgen synthesis"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Female inhibin is secreted by:",
            "options": ["Zona pellucida", "Ovary", "Corpus luteum", "Uterine epithelium"],
            "answer": "Corpus luteum"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Head of epididymis is called:",
            "options": ["Caput epididymis", "Cauda epididymis", "Vas deferens", "Gubernaculum"],
            "answer": "Caput epididymis"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "After hysterectomy, ovarian cycle stops due to:",
            "options": ["FSH stoppage", "LH stoppage", "No uterine feedback", "Ovarian failure"],
            "answer": "No uterine feedback"
          },
          {
            "section": "Biology",
            "topic": "Human Physiology",
            "question": "Mammary glands are modified:",
            "options": ["Sebaceous glands", "Sweat glands", "Meibomian glands", "Salivary glands"],
            "answer": "Sweat glands"
          },
          {
            "section": "Biology",
            "topic": "Human Health",
            "question": "Weight loss, infections, and cancers are symptoms of:",
            "options": ["AIDS", "Gonorrhea", "Candidiasis", "Genital warts"],
            "answer": "AIDS"
          },
          {
            "section": "Biology",
            "topic": "Reproductive Health",
            "question": "In IVF-ET, embryo implantation occurs at:",
            "options": ["Zygote stage", "8-celled stage", "Gastrula stage", "32-celled stage"],
            "answer": "8-celled stage"
          },
          {
            "section": "Biology",
            "topic": "Genetics",
            "question": "In a cross between AB and ++, 650/1000 offspring are parental type. Distance between A and B is:",
            "options": ["15 map units", "30 map units", "35 map units", "45 map units"],
            "answer": "35 map units"
          },
          {
            "section": "Biology",
            "topic": "Evolution",
            "question": "Mutations contribute to evolution because they:",
            "options": ["Introduce variation", "Cause death", "Are stable", "None"],
            "answer": "Introduce variation"
          },
          {
            "section": "Biology",
            "topic": "Genetics",
            "question": "Barr body in mammals represents:",
            "options": ["All heterochromatin in females", "Y chromosome in males", "Inactivated X chromosome in females", "Extra autosomes"],
            "answer": "Inactivated X chromosome in females"
          },
          {
            "section": "Biology",
            "topic": "Genetics",
            "question": "If round seeds (dominant) are crossed, % wrinkled seeds in heterozygous parents:",
            "options": ["25%", "50%", "75%", "100%"],
            "answer": "25%"
          },
          {
            "section": "Biology",
            "topic": "Evolution",
            "question": "Most important factor for species continuity:",
            "options": ["DNA replication", "Gamete formation", "Protein synthesis", "None"],
            "answer": "DNA replication"
          },
          {
            "section": "Biology",
            "topic": "Evolution",
            "question": "Lamarckism is disproven by:",
            "options": ["Melanized peppered moths", "Snakes without limbs", "Webbed toes in ducks", "Cave-dwelling animals"],
            "answer": "Melanized peppered moths"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Biological species concept is based on:",
            "options": ["Reproductive isolation", "Morphology", "DNA similarity", "Geographic distribution"],
            "answer": "Reproductive isolation"
          },
          {
            "section": "Biology",
            "topic": "Immunity",
            "question": "Immunity acquired from mother to fetus is:",
            "options": ["Innate", "Active", "Passive", "Cellular"],
            "answer": "Passive"
          },
          {
            "section": "Biology",
            "topic": "Human Health",
            "question": "HIV contains:",
            "options": ["Single-stranded DNA", "Double-stranded DNA", "Single-stranded RNA", "Double-stranded RNA"],
            "answer": "Single-stranded RNA"
          },
          {
            "section": "Biology",
            "topic": "Animal Husbandry",
            "question": "Mating within same breed with no common ancestors is:",
            "options": ["Outcrossing", "Inbreeding", "Crossbreeding", "Hybridization"],
            "answer": "Outcrossing"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "World Biodiversity Day is on:",
            "options": ["5th June", "22nd April", "29th December", "16th September"],
            "answer": "29th December"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Animals obtain phosphorus from:",
            "options": ["Water", "Plants", "Soil", "Rocks"],
            "answer": "Plants"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "DDT biomagnification causes bird decline by:",
            "options": ["Calcium disruption", "Thin eggshells", "Premature hatching", "All of these"],
            "answer": "All of these"
          }
        ]
  },
  ,
  { 
    paperId: "Model Paper 3", 
    questions: [
      {
        "section": "Physics",
        "topic": "Kinematics",
        "question": "The coordinates of a moving particle at any time \( t \) are given by \( x = ct^2 \) and \( y = bt^2 \). The speed of the particle at time \( t \) is given by:",
        "options": [
          "2t(c + b)",
          "√(c² + b²)",
          "2t√(c² + b²)",
          "2t√(c² - b²)"
        ],
        "answer": "2t√(c² + b²)"
      },
      {
        "section": "Physics",
        "topic": "Mechanics",
        "question": "If the cable of a lift snaps while the lift is descending, the weight felt by the person inside the lift is:",
        "options": [
          "Twice the actual weight",
          "Zero",
          "Same as the actual weight",
          "Half of the actual weight"
        ],
        "answer": "Zero"
      },
      {
        "section": "Physics",
        "topic": "Gravitation",
        "question": "The masses \( m_1 \) and \( m_2 \) start moving toward each other under mutual gravitational force. Their relative speed when they are at a distance \( d \) apart is:",
        "options": [
          "√[2G(m₁ + m₂)]",
          "√[2G(m₁ + m₂)/d]",
          "√[2G(m₁m₂)/d]",
          "√[2Gd/(m₁ + m₂)]"
        ],
        "answer": "√[2G(m₁ + m₂)/d]"
      },
      {
        "section": "Physics",
        "topic": "Fluid Mechanics",
        "question": "The height of mercury column in a simple barometer is \( h \). As the tube is inclined with the vertical at an angle \( α \), the length of the mercury column along the tube is \( l \), then:",
        "options": [
          "l = h",
          "l = h/cosα",
          "l = hcosα",
          "l = h^cosα"
        ],
        "answer": "l = h/cosα"
      },
      {
        "section": "Physics",
        "topic": "Material Science",
        "question": "The load versus elongation graph for the same material is shown. The thinnest wire is represented by the line:",
        "options": ["OB", "OA", "OD", "OC"],
        "answer": "OA"
      },
      {
        "section": "Physics",
        "topic": "Thermodynamics",
        "question": "If the work done in blowing a bubble of volume \( V \) is \( W \), the work done in blowing a soap bubble of volume \( 2V \) will be:",
        "options": ["W", "2W", "√2W", "∛4W"],
        "answer": "∛4W"
      },
      {
        "section": "Physics",
        "topic": "Fluid Mechanics",
        "question": "The ratio of radii of two spheres is 1:2. The ratio of their terminal speeds in a viscous liquid is:",
        "options": ["1:1", "2:1", "1:2", "1:4"],
        "answer": "1:4"
      },
      {
        "section": "Physics",
        "topic": "Thermal Radiation",
        "question": "A black body at temperature \( T \) radiates at \( W \) watts. If its temperature is reduced to \( T/3 \), it will radiate at:",
        "options": ["W/81", "W/243", "W/27", "W/9"],
        "answer": "W/81"
      },
      {
        "section": "Physics",
        "topic": "Thermodynamics",
        "question": "A Carnot engine working between 300 K and 600 K has a work output of 800 J/cycle. The heat energy supplied from the source is:",
        "options": ["800 J", "1600 J", "3200 J", "6400 J"],
        "answer": "1600 J"
      },
      {
        "section": "Physics",
        "topic": "Energy Conversion",
        "question": "The height of a waterfall is 84 m. Assuming full energy conversion to heat, the rise in water temperature is: (Given \( g = 9.8 \, m/s² \), \( J = 4.2 \, J/cal \))",
        "options": ["0.196°C", "1.960°C", "0.96°C", "0.0196°C"],
        "answer": "0.196°C"
      },
      {
        "section": "Physics",
        "topic": "Waves",
        "question": "Ten tuning forks produce 4 beats/sec. The highest frequency is twice the lowest. Possible highest and lowest frequencies (Hz) are:",
        "options": ["80 and 40", "100 and 50", "44 and 22", "72 and 36"],
        "answer": "80 and 40"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "A spherical mirror forms an image with magnification 3. If the focal length is 24 cm, the object distance may be:",
        "options": ["32 cm, 24 cm", "32 cm, 16 cm", "32 cm only", "16 cm only"],
        "answer": "16 cm only"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "The maximum refractive index of a prism material allowing light passage when the refracting angle is \( A \):",
        "options": [
          "√[1 + sin²(A/2)]",
          "√[1 + cos²(A/2)]",
          "√[1 + tan²(A/2)]",
          "√[1 + cot²(A/2)]"
        ],
        "answer": "√[1 + cot²(A/2)]"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "An achromatic combination uses a lens of focal length \( f \) and dispersive power \( ω \). The focal length of the second lens (dispersive power \( 2ω \)) is:",
        "options": ["2f", "f/2", "-f/2", "-2f"],
        "answer": "-2f"
      },
      {
        "section": "Physics",
        "topic": "Electric Circuits",
        "question": "Resistances \( R₁ \) and \( R₂ \) have temperature coefficients \( α \) and \( -β \). The ratio \( R₁/R₂ \) for temperature-independent series resistance is:",
        "options": [
          "α/β",
          "(α + β)/(α - β)",
          "(α² + β²)/(αβ)",
          "β/α"
        ],
        "answer": "β/α"
      },
      {
        "section": "Physics",
        "topic": "Electric Circuits",
        "question": "A 100 W bulb (200 V) and a 200 W bulb (100 V) have:",
        "options": [
          "Resistance ratio 4:1",
          "Max current ratio 1:4",
          "Resistance ratio 2:1",
          "Max current ratio 1:2"
        ],
        "answer": "Max current ratio 1:2"
      },
      {
        "section": "Physics",
        "topic": "Electric Circuits",
        "question": "In the given circuit, the value of \( R \) for which the effective resistance between \( P \) and \( Q \) equals \( R \) is:",
        "options": ["3.0 Ω", "√39 Ω", "√69 Ω", "10.0 Ω"],
        "answer": "√69 Ω"
      },
      {
        "section": "Physics",
        "topic": "Electric Circuits",
        "question": "A cell, variable resistance \( R \), and ammeter are in series. Voltmeter readings for two \( R \) values give the cell’s internal resistance as:",
        "options": ["3.4 Ω", "4.3 Ω", "2.00 Ω", "4.6 Ω"],
        "answer": "2.00 Ω"
      },
      {
        "section": "Physics",
        "topic": "Magnetism",
        "question": "A proton and an alpha particle with equal kinetic energies describe circular paths in a magnetic field \( B \). The ratio \( r_p/r_α \) is:",
        "options": ["1:1", "2:1", "1:2", "1:4"],
        "answer": "1:2"
      },
      {
        "section": "Physics",
        "topic": "Electromagnetism",
        "question": "In an LCR circuit, if capacitance changes from \( C \) to \( 4C \), the inductance should change from \( L \) to:",
        "options": ["2L", "L/2", "L/4", "4L"],
        "answer": "L/4"
      },
      {
        "section": "Physics",
        "topic": "Electromagnetism",
        "question": "In an LCR series circuit, the voltmeter and ammeter readings are:",
        "options": [
          "V = 100 V, I = 2 A",
          "V = 100 V, I = 5 A",
          "V = 100 V, I = 3 A",
          "V = 100 V, I = 1 A"
        ],
        "answer": "V = 100 V, I = 3 A"
      },
      {
        "section": "Physics",
        "topic": "Modern Physics",
        "question": "Light of wavelength 4000 Å is incident on a metal plate with work function 2 eV. The maximum kinetic energy of emitted photoelectrons is:",
        "options": ["2.0 eV", "1.5 eV", "1.1 eV", "0.5 eV"],
        "answer": "1.1 eV"
      },
      {
        "section": "Physics",
        "topic": "Electromagnetic Induction",
        "question": "A circular coil of 50 turns and radius 10 cm is placed perpendicular to a magnetic field of 0.2 T. If the magnetic field is reduced to zero in 0.5 seconds, the induced emf in the coil is:",
        "options": [
          "0.628 V",
          "1.256 V",
          "2.512 V",
          "3.14 V"
        ],
        "answer": "1.256 V",
        "solution": "Use Faraday’s Law: \( \epsilon = -N \frac{\Delta \phi}{\Delta t} \). Magnetic flux \( \phi = BA \). Radius = 0.1 m ⇒ Area \( A = \pi r^2 = 0.0314 \, \text{m}^2 \). ΔΦ = 0.2 × 0.0314 = 0.00628 Wb. \( \epsilon = 50 \times \frac{0.00628}{0.5} = 1.256 \, \text{V} \)."
      },
      {
        "section": "Physics",
        "topic": "Atomic Physics",
        "question": "The angular speed of the electron in the \( n^{th} \) orbit of Bohr’s hydrogen atom is:",
        "options": [
          "Inversely proportional to \( n \)",
          "Inversely proportional to √n",
          "Inversely proportional to n²",
          "Inversely proportional to n³"
        ],
        "answer": "Inversely proportional to n³"
      },
      {
        "section": "Physics",
        "topic": "Nuclear Physics",
        "question": "The half-life of radon is 4 days. 10 grams of radon after 16 days will reduce to:",
        "options": ["2.5 g", "0.625 g", "1.625 g", "0.25 g"],
        "answer": "0.625 g"
      },
      {
        "section": "Physics",
        "topic": "Oscillations",
        "question": "A mass \( M \) attached to two springs oscillates horizontally. The time period is:",
        "options": [
          "2π√(3K/M)",
          "2π√(K/M)",
          "2π√(M/2K)",
          "2π√(M/3K)"
        ],
        "answer": "2π√(M/3K)"
      },
      {
        "section": "Physics",
        "topic": "Electronics",
        "question": "A sinusoidal voltage (peak 200 V) is connected to a diode and resistor \( R \) for half-wave rectification. The RMS voltage across \( R \) is:",
        "options": ["200 V", "100 V", "100/√2 V", "0 V"],
        "answer": "100/√2 V"
      },
      {
        "section": "Physics",
        "topic": "Mechanics",
        "question": "Accelerations of blocks A and B (fixed wedge, ideal pulley/string):",
        "options": [
          "g/3, g/6",
          "g/6, g/3",
          "g/2, g/2",
          "0, 0"
        ],
        "answer": "g/6, g/3"
      },
      {
        "section": "Physics",
        "topic": "Rotational Motion",
        "question": "A solid sphere, hollow sphere, solid cylinder, hollow cylinder, and ring roll down an incline. The maximum angular acceleration is for:",
        "options": [
          "Solid sphere",
          "Hollow cylinder",
          "Hollow sphere",
          "Ring"
        ],
        "answer": "Ring"
      },
      {
        "section": "Physics",
        "topic": "Wave Optics",
        "question": "In Young’s double-slit experiment, the ninth bright fringe is 7.5 mm from the second dark fringe. The wavelength of light is:",
        "options": [
          "5000 Å",
          "5000/7 Å",
          "2500 Å",
          "2500/7 Å"
        ],
        "answer": "5000 Å"
      },
      {
        "section": "Physics",
        "topic": "Modern Physics",
        "question": "A photon and electron have the same wavelength. The ratio \( E_e/E_{ph} \) is:",
        "options": [
          "2C/V",
          "V/2C",
          "2C/V",
          "V/C"
        ],
        "answer": "2C/V"
      },
      {
        "section": "Physics",
        "topic": "X-rays",
        "question": "The wavelength of the \( K_α \) line of a hydrogen-like element is 0.32 Å. The wavelength of the \( K_β \) line is:",
        "options": ["0.72 Å", "0.37 Å", "7.2 Å", "0.27 Å"],
        "answer": "0.27 Å"
      },
      {
        "section": "Physics",
        "topic": "Waves",
        "question": "A standing wave in a 150 cm string (mass 1.5 kg, tension 36 N) has 4 nodes. The natural frequency is:",
        "options": ["20 Hz", "10 Hz", "30 Hz", "40 Hz"],
        "answer": "40 Hz"
      },
      {
        "section": "Physics",
        "topic": "Electrostatics",
        "question": "A hollow metallic sphere \( A \) (radius \( R \)) and a small sphere \( B \) (radius \( R/5 \)) are both charged to 100 V. When connected, the final potential of \( A \) is:",
        "options": ["200 V", "150 V", "120 V", "100 V"],
        "answer": "100 V"
      },
      {
        "section": "Physics",
        "topic": "Gravitation",
        "question": "A satellite orbits a planet with radius \( nR \) (Earth’s radius \( R \)) at angular speed \( ω \). The planet’s gravitational acceleration is:",
        "options": [
          "Rω²",
          "16Rω²",
          "32nRω²",
          "64nRω²"
        ],
        "answer": "32nRω²"
      },
      {
        "section": "Physics",
        "topic": "Electrostatics",
        "question": "A potentiometer balances a 1.5 V cell at 76.3 cm. With a 9.5 Ω resistor, the balance point shifts to 64.8 cm. The cell’s internal resistance is:",
        "options": ["1.7 Ω", "1.5 Ω", "1.2 Ω", "1.1 Ω"],
        "answer": "1.1 Ω"
      },
      {
        "section": "Physics",
        "topic": "Magnetism",
        "question": "Electromagnet materials should have:",
        "options": [
          "High initial permeability",
          "Low initial permeability",
          "Large hysteresis loop",
          "High coercivity"
        ],
        "answer": "High initial permeability"
      },
      {
        "section": "Physics",
        "topic": "Cyclotron",
        "question": "A cyclotron with Dee radius 60 cm and frequency 24 MHz accelerates deuterons. The magnetic field \( B \) is:",
        "options": ["9.5 T", "7.2 T", "5.0 T", "3.2 T"],
        "answer": "9.5 T"
      },
      {
        "section": "Physics",
        "topic": "LC Oscillations",
        "question": "For \( C = 1 F \) and \( L = 4 H \), the maximum charge in the capacitor (initial charge 4 C, decreasing at √5 C/s) is:",
        "options": [
          "6 C",
          "3 C",
          "No charge",
          "None of the above"
        ],
        "answer": "6 C"
      },
      {
        "section": "Physics",
        "topic": "Collisions",
        "question": "A particle strikes the midpoint of a hinged rod elastically and comes to rest. The ratio \( M/m \) is:",
        "options": ["2/3", "3/4", "4/3", "3/2"],
        "answer": "3/4"
      },
      {
        "section": "Physics",
        "topic": "Elasticity",
        "question": "An elastic string has length \( a \) under 4 N tension and \( b \) under 5 N tension. Its length under 9 N tension is:",
        "options": [
          "5b - 4a",
          "b - a",
          "2b - (1/4)a",
          "4a - 3b"
        ],
        "answer": "5b - 4a"
      },
      {
        "section": "Physics",
        "topic": "Displacement Current",
        "question": "In a capacitor circuit with sinusoidal voltage \( V = V₀ sinωt \), the conduction current \( i \) and displacement current \( i_d \) satisfy:",
        "options": [
          "i = i_d",
          "i > i_d",
          "i < i_d",
          "i = 3CV₀/t, i_d = CV₀/t"
        ],
        "answer": "i = i_d"
      },
      {
        "section": "Physics",
        "topic": "Nuclear Physics",
        "question": "The Q-value of \( ^{11}C → ^{11}B + e⁺ + ν \) decay (given masses \( ^{11}C = 11.011434u \), \( ^{11}B = 11.009305u \)) is:",
        "options": ["0.961 MeV", "961 MeV", "0.961 eV", "0.001 MeV"],
        "answer": "0.961 MeV"
      },
      {
        "section": "Physics",
        "topic": "RC Circuits",
        "question": "The ratio of time constants \( t₁/t₂ \) during charging and discharging of a capacitor is:",
        "options": ["3/2", "1", "2/3", "1/3"],
        "answer": "3/2"
      },
      {
        "section": "Physics",
        "topic": "Optics",
        "question": "A telescope with objective focal length 50 cm and eyepiece 5 cm is focused on a scale 200 cm away. The distance between objective and eyepiece is:",
        "options": ["80.70 cm", "70.80 cm", "90.70 cm", "70.90 cm"],
        "answer": "70.80 cm"
      },
        {
          "section": "Chemistry",
          "topic": "Atomic Structure",
          "question": "The second ionization potentials in electron volts of oxygen and fluorine atoms are respectively given by",
          "options": [
            "35.1, 38.3",
            "38.3, 38.3",
            "38.3, 35.1",
            "35.1, 35.1"
          ],
          "answer": "38.3, 35.1"
        },
        {
          "section": "Chemistry",
          "topic": "Gas Laws",
          "question": "If the pressure of a gas contained in a closed vessel is increased by 0.4% and the temperature increased by 1K, then the initial temperature must be",
          "options": [
            "250K",
            "250°C",
            "25K",
            "25°C"
          ],
          "answer": "250K"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Bonding",
          "question": "Among the following which is polar",
          "options": [
            "CO₂",
            "SO₂",
            "BeCl₂",
            "Cl"
          ],
          "answer": "SO₂"
        },
        {
          "section": "Chemistry",
          "topic": "Stoichiometry",
          "question": "The number of moles of CaCl₂ needed to react with excess of AgNO₃ to produce 4.31 gm of AgCl",
          "options": [
            "0.03",
            "0.015",
            "0.045",
            "0.06"
          ],
          "answer": "0.015"
        },
        {
          "section": "Chemistry",
          "topic": "Atomic Structure",
          "question": "The frequency of radiation emitted when the electron falls from n = 4 to n = 1 in a hydrogen atom will be (given IP of H = 2.18 × 10⁻¹⁸ J atom⁻¹ and h = 6.625 × 10⁻³⁴ Js)",
          "options": [
            "1.03 × 10⁵ S⁻¹",
            "3.08 × 10¹⁵ S⁻¹",
            "2 × 10¹⁵ S⁻¹",
            "1.54 × 10¹⁵ S⁻¹"
          ],
          "answer": "3.08 × 10¹⁵ S⁻¹"
        },
        {
          "section": "Chemistry",
          "topic": "Periodic Table",
          "question": "A metal M readily forms water soluble sulphate MSO₄, water insoluble hydroxide M(OH)₂ and oxide MO, which becomes inert on heating. The hydroxide is soluble in NaOH. The metal is",
          "options": [
            "Be",
            "Mg",
            "Ca",
            "Sr"
          ],
          "answer": "Be"
        },
        {
          "section": "Chemistry",
          "topic": "Coordination Chemistry",
          "question": "Which of the following is colourless?",
          "options": [
            "[Cu(H₂O)₄]²⁺",
            "[Cu(CN)₂]⁻",
            "[Cu(NH₃)₄]²⁺",
            "[CuCl₄]²⁻"
          ],
          "answer": "[Cu(CN)₂]⁻"
        },
        {
          "section": "Chemistry",
          "topic": "Acids and Bases",
          "question": "Which of the following dissolves in H₂SO₄ to give oleum?",
          "options": [
            "H₂S",
            "S₂O",
            "SO₂",
            "SO₃"
          ],
          "answer": "SO₃"
        },
        {
          "section": "Chemistry",
          "topic": "Redox Reactions",
          "question": "Chlorine water oxidises sodium thiosulphate to",
          "options": [
            "Na₂SO₄ and Na₂S",
            "Na₂S₂O₅",
            "Na₂SO₄ and S",
            "Na₂S₄O₆"
          ],
          "answer": "Na₂SO₄ and S"
        },
        {
          "section": "Chemistry",
          "topic": "Acids and Bases",
          "question": "Which of the following is not a protonic acid?",
          "options": [
            "B(OH)₃",
            "PO(OH)₃",
            "SO(OH)₂",
            "SO₂(OH)₂"
          ],
          "answer": "B(OH)₃"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Equilibrium",
          "question": "Equivalent amounts of H₂ and I₂ are heated in a closed vessel till equilibrium is obtained. If 80% of the H₂ can be converted to HI, the Kₑ at this temperature is",
          "options": [
            "64",
            "16",
            "0.25",
            "4"
          ],
          "answer": "64"
        },
        {
          "section": "Chemistry",
          "topic": "Solutions",
          "question": "At 300K, 36 g of glucose present in a litre of its solution has an osmotic pressure of 4.98 bar. If the osmotic pressure of the solution is 1.52 bar at the same temperature, what would be its concentration?",
          "options": [
            "0.061M",
            "0.61M",
            "0.0061M",
            "6.1M"
          ],
          "answer": "0.061M"
        },
        {
          "section": "Chemistry",
          "topic": "Thermodynamics",
          "question": "Calculate the amount of work done by two moles of an ideal gas at 298 K in reversible isothermal expansion from 10 litre to 20 litre [log 2 = 0.3010]",
          "options": [
            "-3435 J",
            "-343.5 J",
            "-34.35 J",
            "-3.435 J"
          ],
          "answer": "-3435 J"
        },
        {
          "section": "Chemistry",
          "topic": "Electrochemistry",
          "question": "The emf of the cell reaction, Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) is 1.1 V. Calculate free energy change for the reaction. If enthalpy of the reaction is −216.7 KJ mol⁻¹, calculate the entropy change of the reaction",
          "options": [
            "-1.476 JK⁻¹mol⁻¹",
            "-14.76 JK⁻¹mol⁻¹",
            "-1476 JK⁻¹mol⁻¹",
            "-147.6 JK⁻¹mol⁻¹"
          ],
          "answer": "-14.76 JK⁻¹mol⁻¹"
        },
        {
          "section": "Chemistry",
          "topic": "Stoichiometry",
          "question": "26.8 gm of Na₂SO₄·nH₂O contains 12.6 gm of water. The value of n is",
          "options": [
            "1",
            "10",
            "6",
            "7"
          ],
          "answer": "7"
        },
        {
          "section": "Chemistry",
          "topic": "Nuclear Chemistry",
          "question": "How many moles of He are produced when one mole of U²³⁸ disintegrates into Pb²⁰⁶?",
          "options": [
            "4",
            "2",
            "8",
            "1"
          ],
          "answer": "8"
        },
        {
          "section": "Chemistry",
          "topic": "Chemical Kinetics",
          "question": "Consider the reaction: A → B + C. Initial concentration of A is 1M. 20 min time is required for completion of 20% reaction. If d/dt [B] = K[A], then half-life (t₁/₂) is [log 5 = 0.6989, log 4 = 0.6020]",
          "options": [
            "55.44 min",
            "50 min",
            "62.13 min",
            "76.3 min"
          ],
          "answer": "62.13 min"
        },
        {
          "section": "Chemistry",
          "topic": "Acid-Base Titration",
          "question": "What will be the pH of a solution formed by mixing 40cm³ of 0.1 M HCl with 10cm³ of 0.45 M NaOH?",
          "options": [
            "10",
            "8",
            "5",
            "12"
          ],
          "answer": "12"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry",
          "question": "The compound contains how many hyper conjugative hydrogen atoms",
          "options": [
            "9",
            "15",
            "10",
            "11"
          ],
          "answer": "10"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Chemistry",
          "question": "Arrange the following in the increasing order of stability",
          "options": [
            "X < Y < Z",
            "Y < Z < X",
            "X > Y > Z",
            "X = Y = Z"
          ],
          "answer": "Y < Z < X"
        },
        {
          "section": "Chemistry",
          "topic": "Electrochemistry",
          "question": "How many coulombs are required for the oxidation of 1 mole of H₂O₂ to O₂?",
          "options": [
            "9.65 × 10⁴",
            "93000",
            "1.93 × 10⁵",
            "19.3 × 10²"
          ],
          "answer": "1.93 × 10⁵"
        },
        {
          "section": "Chemistry",
          "topic": "Stereochemistry",
          "question": "Number of stereo isomers of the given compound is",
          "options": [
            "2",
            "4",
            "3",
            "6"
          ],
          "answer": "4"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Reactions",
          "question": "RNH₂ reacts with Cl₃C/OH⁻ to form (X), R₂NH reacts with Cl₃C/OH⁻ to form (Y). The major products (X) and (Y) are respectively",
          "options": [
            "RCN and RNC",
            "RNC and R₂NCHO",
            "Both RNC",
            "RNC and no reaction"
          ],
          "answer": "RNC and R₂NCHO"
        },
        {
          "section": "Chemistry",
          "topic": "Carbohydrates",
          "question": "Glucose reacts with acetic anhydride to form:",
          "options": [
            "Mono acetate",
            "Tetra acetate",
            "Penta acetate",
            "Hexa acetate"
          ],
          "answer": "Penta acetate"
        },
        {
          "section": "Chemistry",
          "topic": "Aromatic Chemistry",
          "question": "What happens when 2,4,6-trinitrochlorobenzene is just warmed with water?",
          "options": [
            "No reaction takes place",
            "A hydrate is formed",
            "2,4-dinitrophenol is formed",
            "Picric acid is formed"
          ],
          "answer": "Picric acid is formed"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Synthesis",
          "question": "How many ethers will be formed when a mixture of C₇H₈OH and CH₃OH are treated with conc. H₂SO₄?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "3"
        },
        {
          "section": "Chemistry",
          "topic": "Coordination Chemistry",
          "question": "In which of the following compounds does the transition metal atom have +3 oxidation number?",
          "options": [
            "[Mn(H₂O)₃Cl₃]",
            "CrO₅",
            "[Fe(CO)₅]",
            "[Fe(CN)₆]⁴⁻"
          ],
          "answer": "[Mn(H₂O)₃Cl₃]"
        },
        {
          "section": "Chemistry",
          "topic": "Hydrogen Bonding",
          "question": "Maximum number of hydrogen bonds per H₂O molecule is",
          "options": [
            "2",
            "4",
            "3",
            "1"
          ],
          "answer": "4"
        },
        {
          "section": "Chemistry",
          "topic": "Isotopes",
          "question": "Solubility of salts in D₂O is lower than in H₂O because of",
          "options": [
            "Greater density of D₂O",
            "Higher boiling point of D₂O",
            "Lower dielectric constant of D₂O",
            "Viscous nature of D₂O"
          ],
          "answer": "Lower dielectric constant of D₂O"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Reaction Mechanisms",
          "question": "The reaction of ethyl bromide with aqueous KOH to form ethanol is an example of:",
          "options": [
            "Electrophilic substitution",
            "Nucleophilic substitution (SN²)",
            "Free radical substitution",
            "Elimination reaction"
          ],
          "answer": "Nucleophilic substitution (SN²)",
          "solution": "Ethyl bromide undergoes hydrolysis via SN² mechanism, where OH⁻ acts as a nucleophile, attacking the electrophilic carbon bonded to Br, leading to inversion of configuration."
        }, 
        {
          "section": "Chemistry",
          "topic": "Alkali Metals",
          "question": "The alkali metal which forms only the monoxide is",
          "options": [
            "K",
            "Rb",
            "Na",
            "Li"
          ],
          "answer": "Li"
        },
        {
          "section": "Chemistry",
          "topic": "Redox Chemistry",
          "question": "The oxidation number of H in sodium hydride is",
          "options": [
            "+1",
            "0",
            "-1",
            "-½"
          ],
          "answer": "-1"
        },
        {
          "section": "Chemistry",
          "topic": "Inorganic Polymers",
          "question": "Inorganic benzene is",
          "options": [
            "B₃H₃N₃",
            "BH₃NH₃",
            "B₃H₆N₃",
            "H₃B₃N₆"
          ],
          "answer": "B₃H₆N₃"
        },
        {
          "section": "Chemistry",
          "topic": "Hybridization",
          "question": "The carbon atoms of graphite are",
          "options": [
            "sp² hybridised",
            "sp³ hybridised",
            "sp hybridised",
            "dsp² hybridised"
          ],
          "answer": "sp² hybridised"
        },
        {
          "section": "Chemistry",
          "topic": "IUPAC Nomenclature",
          "question": "The IUPAC name of the compound is",
          "options": [
            "2-hydroxy-3-methylbutane",
            "3-methylbutanol",
            "3-methyl-2-butanol",
            "2-methyl-3-hydroxybutane"
          ],
          "answer": "3-methyl-2-butanol"
        },
        {
          "section": "Chemistry",
          "topic": "Alkenes",
          "question": "2-methyl but-2-ene is",
          "options": [
            "CH₃-CH(CH₃)-CH₂CH₃",
            "CH₃-C(CH₃)=CH₂",
            "CH₃-CH=CH-CH₃",
            "CH₃-CH(CH₂CH₃)-CH₃"
          ],
          "answer": "CH₃-C(CH₃)=CH₂"
        },
        {
          "section": "Chemistry",
          "topic": "Organic Reactions",
          "question": "A mixture of 2-bromopropane and bromoethane is heated with sodium metal in ether medium. The alkane/s formed during the reaction is/are",
          "options": [
            "Butane only",
            "2,3-dimethylbutane only",
            "2,2-dimethylbutane only",
            "All of these"
          ],
          "answer": "All of these"
        },
        {
          "section": "Chemistry",
          "topic": "Isomerism",
          "question": "Number of possible isomers (including stereoisomers) with molecular formula C₄H₈ is",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": "6"
        },
        {
          "section": "Chemistry",
          "topic": "Environmental Chemistry",
          "question": "UV radiation from sun causes a reaction that produces ______ layer in atmosphere",
          "options": [
            "Carbon monoxide",
            "Sulfur dioxide",
            "Fluorides",
            "Ozone"
          ],
          "answer": "Ozone"
        },
        {
          "section": "Chemistry",
          "topic": "Solid State",
          "question": "A molecule contains atoms A and B such that A occurs at the corners of the cube and B at the face centres. The formula of the molecule is",
          "options": [
            "AB₃",
            "AB",
            "AB₂",
            "A₂B"
          ],
          "answer": "AB₃"
        },
        {
          "section": "Chemistry",
          "topic": "Solid State",
          "question": "How many unit cells are present in a cube shaped ideal crystal of NaCl of mass 1.0g?",
          "options": [
            "5.14 × 10²¹",
            "1.28 × 10²¹",
            "1.71 × 10²¹",
            "2.5 × 10²¹"
          ],
          "answer": "5.14 × 10²¹"
        },
        {
          "section": "Chemistry",
          "topic": "Solutions",
          "question": "0.1435 m solution of a non-volatile, non-electrolyte solute has the freezing point 0.73 degrees lower than that of benzene. What is the value of molal freezing point depression constant of benzene?",
          "options": [
            "5.087 K·m⁻¹",
            "40.0 K·m⁻¹",
            "0.52 K·m⁻¹",
            "1.86 K·m⁻¹"
          ],
          "answer": "1.86 K·m⁻¹"
        },
        {
          "section": "Chemistry",
          "topic": "Solutions",
          "question": "A solution of 18g of non-volatile, non-electrolyte solute in 150g of water was found to have a boiling point of 100.34°C. If K_b for water is 0.51 K·molal⁻¹, what is the molar mass of the solute?",
          "options": [
            "180",
            "60",
            "100",
            "342"
          ],
          "answer": "180"
        },
        {
          "section": "Chemistry",
          "topic": "Electrochemistry",
          "question": "The electrochemical equivalent of a substance is the mass of the substance liberated on passing a current of",
          "options": [
            "One coulomb",
            "One faraday",
            "One ampere",
            "One volt"
          ],
          "answer": "One coulomb"
        },
        {
          "section": "Chemistry",
          "topic": "Thermodynamics",
          "question": "A certain body of mass \( M \) moves under the action of a conservative force with potential energy \( U \) given by \( U = \\frac{Kx}{x² + a²} \) (x → distance, a → amplitude). The units of K will be equal to that of:",
          "options": [
            "Power",
            "Couple",
            "Joule-metre",
            "All are true"
          ],
          "answer": "Joule-metre"
        },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "Loss of water by guttation occurs in plants through",
            "options": ["bark", "cuticle", "stomata", "hydathodes"],
            "answer": "hydathodes"
          },
          {
            "section": "Biology",
            "topic": "Photosynthesis",
            "question": "Mohl's half-leaf experiment proves that",
            "options": [
              "an organic substance is produced",
              "CO₂ is necessary for photosynthesis",
              "Chlorophyll is necessary",
              "O₂ is released during photosynthesis"
            ],
            "answer": "O₂ is released during photosynthesis"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "The forest with thick canopy of tall trees with buttresses, epiphytes and lianas with high biodiversity is typical of",
            "options": ["evergreen forests", "scrub jungles", "deciduous forests", "coniferous forests"],
            "answer": "evergreen forests"
          },
          {
            "section": "Biology",
            "topic": "Plant Hormones",
            "question": "Parthenocarpic development of fruit is brought about by",
            "options": ["NAA, 2-T", "2,4,5-T", "2,4-D", "NAA, 2,4-D"],
            "answer": "NAA, 2,4-D"
          },
          {
            "section": "Biology",
            "topic": "Molecular Biology",
            "question": "Of the following statements, which one is true?",
            "options": [
              "DNA is single-stranded, RNA is double-stranded",
              "There is only one type of RNA, but many types of DNA",
              "DNA synthesizes RNA, but RNA generally cannot synthesize DNA",
              "DNA bases are adenine, guanine, cytosine, uracil and RNA has adenine, guanine, cytosine and thymine"
            ],
            "answer": "DNA synthesizes RNA, but RNA generally cannot synthesize DNA"
          },
          {
            "section": "Biology",
            "topic": "Nitrogen Fixation",
            "question": "Symbiotic nitrogen fixation is brought about by",
            "options": ["Nostoe, Anabaena", "Bacillus denitrificans", "Rhizobium radicicola", "Nitrosomonas"],
            "answer": "Rhizobium radicicola"
          },
          {
            "section": "Biology",
            "topic": "Genetics",
            "question": "Chromosomes having sub-terminal centromeres are called",
            "options": ["acrocentric", "polycentric", "submetacentric", "acentric"],
            "answer": "acrocentric"
          },
          {
            "section": "Biology",
            "topic": "Cell Division",
            "question": "Chromosomes are lined up in the equatorial plane during",
            "options": ["metaphase", "anaphase", "telophase", "interphase"],
            "answer": "metaphase"
          },
          {
            "section": "Biology",
            "topic": "DNA Replication",
            "question": "The unwinding of DNA duplex is performed by an enzyme called",
            "options": ["lactase", "gyrase", "maltase", "ligase"],
            "answer": "gyrase"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "One of the following is not an example for prey-predator food chain",
            "options": [
              "Seeds → Rodents → Snakes → Mongoose",
              "Green plants → Deer → Tiger",
              "Grass → Grasshopper → Lizard → Hawk",
              "Mangroves → Shed leaves → Detritus → Shrimps → Small fishes → Large fishes"
            ],
            "answer": "Mangroves → Shed leaves → Detritus → Shrimps → Small fishes → Large fishes"
          },
          {
            "section": "Biology",
            "topic": "Plant Morphology",
            "question": "Hypanthodium is typically seen in",
            "options": ["Cocos", "Ficus", "Solanum", "Hibiscus"],
            "answer": "Ficus"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "The conical root of carrot is a",
            "options": ["Haustorial root", "adventitious root", "Tap root", "fibrous root"],
            "answer": "Tap root"
          },
          {
            "section": "Biology",
            "topic": "Genetics",
            "question": "Organisms (living things) where RNA is genetic material, are",
            "options": ["φ × 174", "Amoeba", "Escherichia coli", "Tobacco mosaic virus; rous sarcoma virus"],
            "answer": "Tobacco mosaic virus; rous sarcoma virus"
          },
          {
            "section": "Biology",
            "topic": "Genetics",
            "question": "Chromosomes which have definite roles in sex determination, are",
            "options": ["Lysosomes", "allosomes", "giant chromosomes", "autosomes"],
            "answer": "allosomes"
          },
          {
            "section": "Biology",
            "topic": "Plant Anatomy",
            "question": "Match the following (Column I with Column II):",
            "options": [
              "A. Radial → P. Cucurbitaceae",
              "B. Collateral → Q. Dracaena",
              "C. Bicollateral → R. Root system",
              "D. Concentric → S. Dicot stem"
            ],
            "answer": "A = R, B = S, C = P, D = Q"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "A snake feeding on a rat is an example for",
            "options": [
              "primary consumer and primary carnivore",
              "tertiary consumer and secondary carnivore",
              "secondary consumer and primary carnivore",
              "primary consumer or herbivore"
            ],
            "answer": "secondary consumer and primary carnivore"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "The phenomenon where pollutants pass in higher concentration through the food chain and accumulate into the maximum quantity in the final consumer is called",
            "options": ["bio-geochemical cycle", "eutrophication", "biological degradation", "biological magnification"],
            "answer": "biological magnification"
          },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "The uptake of soil ions by the root system is by a process of",
            "options": ["diffusion", "osmosis", "imbibition", "all of these"],
            "answer": "all of these"
          },
          {
            "section": "Biology",
            "topic": "Ecology",
            "question": "Ascending order of ecological units in the increasing order of complexity is",
            "options": [
              "species, population, community, ecosystem, biome, biosphere",
              "community, population, species, biosphere, ecosystem, biome",
              "biome, biosphere, ecosystem, community, population, species",
              "population, community, species, ecosystem, biosphere, biome"
            ],
            "answer": "species, population, community, ecosystem, biome, biosphere"
          },
          {
            "section": "Biology",
            "topic": "Plant Morphology",
            "question": "One of the following pairs is an example for hesperidium",
            "options": ["banana and papaya", "pineapple and guava", "orange and lemon", "apple and grapes"],
            "answer": "orange and lemon"
          },
          {
            "section": "Biology",
            "topic": "Biotechnology",
            "question": "Haploid plants can be produced by",
            "options": ["Pollen culture", "cotyledon culture", "Embryo culture", "meristem culture"],
            "answer": "Pollen culture"
          },
          {
            "section": "Biology",
            "topic": "Plant Reproduction",
            "question": "In angiosperms, triple fusion results in the formation of",
            "options": ["secondary nucleus", "polar nucleus", "primary endosperm nucleus", "zygotic nucleus"],
            "answer": "primary endosperm nucleus"
          },
          {
            "section": "Biology",
            "topic": "Molecular Biology",
            "question": "Chargaff’s rule is applicable to",
            "options": ["single-stranded RNA", "single-stranded DNA and RNA", "single-stranded DNA", "double-stranded DNA"],
            "answer": "double-stranded DNA"
          },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "What will be the direction of net osmotic movement of water if solution ‘A’, enclosed in a semipermeable membrane, having an osmotic potential of -30 bars and turgor pressure of 5 bars is submerged in solution B with an osmotic potential of -10 bars and 0 turgor pressure?",
            "options": ["B to A", "Equal movement in both directions", "A to B", "No movement"],
            "answer": "A to B"
          },
          {
            "section": "Biology",
            "topic": "Cell Cycle",
            "question": "The phase of cell cycle during which ‘DNA + polymerase’ is functionally active is",
            "options": ["S", "G₂", "G₁", "M"],
            "answer": "S"
          },
          {
            "section": "Biology",
            "topic": "Biochemistry",
            "question": "Match the biochemical processes with their cellular locations:",
            "options": [
              "A. Krebs cycle → 1. Stroma",
              "B. Glycolysis → 2. Grana",
              "C. Calvin cycle → 3. Mitochondrial matrix",
              "D. Light reaction → 4. Cytoplasm"
            ],
            "answer": "A = 3, B = 4, C = 1, D = 2"
          },
          {
            "section": "Biology",
            "topic": "Mycology",
            "question": "An ascomycetes fungus is",
            "options": ["Agaricus", "Pleurotus", "Phytophthora", "Yeast"],
            "answer": "Yeast"
          },
          {
            "section": "Biology",
            "topic": "Phycology",
            "question": "‘Phycology’ is the study of",
            "options": ["Lichens", "Ficus", "Fungi", "algae"],
            "answer": "algae"
          },
          {
            "section": "Biology",
            "topic": "Respiration",
            "question": "RQ of sprouting potato tubers will be",
            "options": ["1", "<1", ">1", "0"],
            "answer": ">1"
          },
          {
            "section": "Biology",
            "topic": "Photosynthesis",
            "question": "Chlorophyll molecules are green in colour because they",
            "options": ["transmit green light", "transform green light", "reflect green light", "absorb green light"],
            "answer": "reflect green light"
          },
          {
            "section": "Biology",
            "topic": "Plant Physiology",
            "question": "The cohesive force existing between molecules of water is contribution to",
            "options": ["Plasmolysis", "translocation", "Ascent of sap", "osmosis"],
            "answer": "Ascent of sap"
          },
            {
              "section": "Biology",
              "topic": "Genetics",
              "question": "Balbiani rings are the structural features of",
              "options": ["allosomes", "autosomes", "lampbrush chromosomes", "polytene chromosomes"],
              "answer": "polytene chromosomes"
            },
            {
              "section": "Biology",
              "topic": "Biochemistry",
              "question": "In ATP, the high energy bond is the one which links",
              "options": ["ribose with phosphate", "phosphate to phosphate", "adenine with phosphate", "adenine with ribose"],
              "answer": "phosphate to phosphate"
            },
            {
              "section": "Biology",
              "topic": "Plant Anatomy",
              "question": "A common feature shared by guard cells and mesophyll cells is",
              "options": ["presence of chloroplasts", "dumb-bell shaped structure", "differentially thick cell wall", "uniformly thin cell wall"],
              "answer": "presence of chloroplasts"
            },
            {
              "section": "Biology",
              "topic": "Molecular Biology",
              "question": "A polysome is formed by",
              "options": [
                "a cluster of ribosomal subunits",
                "many mRNAs being attached to a ribosome",
                "a cluster of ribosomes",
                "many ribosomes attached to mRNA"
              ],
              "answer": "many ribosomes attached to mRNA"
            },
            {
              "section": "Biology",
              "topic": "Biotechnology",
              "question": "Construction of a recombinant DNA involves",
              "options": [
                "Cleaving and rejoining DNA segments with ‘endonuclease’ alone",
                "Cleaving DNA segments with ‘endonuclease’ and rejoining them with ‘ligase’",
                "Cleaving DNA segments with ‘ligase’ and rejoining them with ‘endonuclease’",
                "Cleaving and rejoining DNA segments with ‘ligase’ alone"
              ],
              "answer": "Cleaving DNA segments with ‘endonuclease’ and rejoining them with ‘ligase’"
            },
            {
              "section": "Biology",
              "topic": "Plant Physiology",
              "question": "To promote the growth of lateral branches of a plant",
              "options": [
                "Axillary buds are removed",
                "Apical bud is removed",
                "Auxin is applied to the apical bud",
                "Auxin is applied to the decapitated shoot tip"
              ],
              "answer": "Apical bud is removed"
            },
            {
              "section": "Biology",
              "topic": "Cell Biology",
              "question": "What do A, B, C and D represent in the given figure of transport proteins?",
              "options": [
                "A: carrier protein, B: symport, C: uniport, D: antiport",
                "A: carrier protein, B: uniport, C: antiport, D: symport",
                "A: carrier protein, B: antiport, C: symport, D: uniport",
                "A: carrier protein, B: uniport, C: symport, D: antiport"
              ],
              "answer": "A: carrier protein, B: uniport, C: symport, D: antiport"
            },
            {
              "section": "Biology",
              "topic": "Taxonomy",
              "question": "The book “Die natürlichen Pflanzenfamilien” was written by",
              "options": [
                "John Hutchinson",
                "A Engler and AE Prantl",
                "Bentham and Hooker",
                "Linnaeus"
              ],
              "answer": "A Engler and AE Prantl"
            },
            {
              "section": "Biology",
              "topic": "Evolution",
              "question": "A phylogenetic system of classification depends upon",
              "options": [
                "floral characters",
                "genetic characters",
                "evolutionary relations",
                "both (b) and (c)"
              ],
              "answer": "both (b) and (c)"
            },
            {
              "section": "Biology",
              "topic": "Plant Diversity",
              "question": "Which of the following is correct about heterospory?",
              "options": [
                "Selaginella and Salvinia are heterosporous",
                "Heterosporous pteridophytes have macrospores and microspores",
                "Development of zygote within female gametophyte is the precursor to the seed habit",
                "All of the above"
              ],
              "answer": "All of the above"
            },
            {
              "section": "Biology",
              "topic": "Ecology",
              "question": "In which of the following ecosystems is the grazing food chain the major conduit for energy flow?",
              "options": [
                "Terrestrial ecosystem",
                "Aquatic ecosystem",
                "Both (a) and (b)",
                "Neither (a) nor (b)"
              ],
              "answer": "Terrestrial ecosystem"
            },
            {
              "section": "Biology",
              "topic": "Plant Physiology",
              "question": "The purple cabbage leaves do not lose their color in cold water but do so in boiling water because",
              "options": [
                "boiling water enters the cell easily",
                "plasmalemma is killed in boiling water",
                "pigment is not soluble in cold water",
                "cell wall is coagulated in boiling water"
              ],
              "answer": "plasmalemma is killed in boiling water"
            },
            {
              "section": "Biology",
              "topic": "Plant Anatomy",
              "question": "Identify the correct statement among the following:",
              "options": [
                "Secondary meristem helps in healing damaged plant tissue",
                "Plants near sea shore lack annual growth rings due to climatic variation",
                "Monocots cannot propagate vegetatively due to scattered vascular bundles",
                "The age of a tree is determined by its height"
              ],
              "answer": "Secondary meristem helps in healing damaged plant tissue"
            },
            {
              "section": "Biology",
              "topic": "Biochemistry",
              "question": "Why is the Krebs cycle called a cycle?",
              "options": [
                "Because oxaloacetate is circular",
                "Because it occurs at night",
                "Because the first molecule is also the last",
                "Because it occurs in round mitochondria"
              ],
              "answer": "Because the first molecule is also the last"
            },
            {
              "section": "Biology",
              "topic": "Animal Physiology",
              "question": "What is common between leech, centipede, and earthworm?",
              "options": [
                "Are hermaphrodite",
                "Have no legs",
                "Have Malpighian tubules",
                "Have ventral nerve cord"
              ],
              "answer": "Have ventral nerve cord"
            },
            {
              "section": "Biology",
              "topic": "Zoology",
              "question": "Except annelida and arthropoda, metameric segmentation is found in:",
              "options": ["Mollusca", "Cestoda", "Coelenterata", "Chordata"],
              "answer": "Chordata"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology",
              "question": "The strongest muscle of the body is found in:",
              "options": ["Finger", "Wrist", "Thigh", "Jaws"],
              "answer": "Jaws"
            },
            {
              "section": "Biology",
              "topic": "Tissue Biology",
              "question": "Power of regeneration is minimum in:",
              "options": ["Epithelial tissue", "Nervous tissue", "Connective tissue", "Skeletal tissue"],
              "answer": "Nervous tissue"
            },
            {
              "section": "Biology",
              "topic": "Invertebrate Zoology",
              "question": "Part of the alimentary canal of Pheretima lined internally by cuticle is:",
              "options": ["Stomach", "Intestine", "Pharynx", "Gizzard"],
              "answer": "Gizzard"
            },
            {
              "section": "Biology",
              "topic": "Invertebrate Zoology",
              "question": "Setae help in locomotion in earthworm but are absent in:",
              "options": ["1st segment", "Last segment", "Clitellar segment", "20th-22nd segment"],
              "answer": "Clitellar segment"
            },
            {
              "section": "Biology",
              "topic": "Animal Physiology",
              "question": "If an earthworm is pricked with a needle, the fluid that comes out is:",
              "options": ["Slimy mucus", "Excretory fluid", "Coelomic fluid", "Haemolymph"],
              "answer": "Coelomic fluid"
            },
            {
              "section": "Biology",
              "topic": "Digestive System",
              "question": "If the secretion of parietal cells of gastric glands is blocked, what happens?",
              "options": [
                "Pepsinogen is not activated to pepsin",
                "Enterokinase is not released",
                "Gastric juice lacks chymosin",
                "Gastric juice lacks pepsinogen"
              ],
              "answer": "Pepsinogen is not activated to pepsin"
            },
            {
              "section": "Biology",
              "topic": "Biochemistry",
              "question": "Anti-Haemorrhagic vitamin is:",
              "options": ["Vit-C", "Vit-B", "Vit-A", "Vit-K"],
              "answer": "Vit-K"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology",
              "question": "Heparin is produced by:",
              "options": ["Kidney cells", "Blood cells", "Bone marrow", "Liver cells"],
              "answer": "Liver cells"
            },
            {
              "section": "Biology",
              "topic": "Respiratory System",
              "question": "The medulla has two respiratory centers. Which center inhibits the inspiratory center during deep expiration?",
              "options": ["Expiratory center", "Inspiratory center", "Dorsal respiratory group", "Basal nuclei"],
              "answer": "Expiratory center"
            },
            {
              "section": "Biology",
              "topic": "Respiratory System",
              "question": "The carotid bodies and aortic bodies concerned with breathing are located:",
              "options": [
                "On the pulmonary artery",
                "On the trachea",
                "On aortic arch and carotid arteries",
                "In the medulla"
              ],
              "answer": "On aortic arch and carotid arteries"
            },
            {
              "section": "Biology",
              "topic": "Respiratory System",
              "question": "The rate of breathing in hypothermia:",
              "options": ["Increases", "Decreases", "No change", "Fluctuates"],
              "answer": "Decreases"
            },
            {
              "section": "Biology",
              "topic": "Cardiovascular System",
              "question": "The ‘Lub’ and ‘Dub’ heart sounds are due to:",
              "options": [
                "Closure of atrioventricular valves",
                "Closure of semilunar valves",
                "Both (a) and (b)",
                "None of these"
              ],
              "answer": "Both (a) and (b)"
            },
            {
              "section": "Biology",
              "topic": "Cardiovascular System",
              "question": "The small oval depression in the interatrial septum of the human heart is called:",
              "options": ["Foramen magnum", "Fossa rotundus", "Fossa ovalis", "Foramen of Panizzae"],
              "answer": "Fossa ovalis"
            },
            {
              "section": "Biology",
              "topic": "Cardiovascular System",
              "question": "Loss of arterial elasticity in old age is called:",
              "options": ["Meningitis", "Osteoporosis", "Arteriosclerosis", "Atherosclerosis"],
              "answer": "Arteriosclerosis"
            },
            {
              "section": "Biology",
              "topic": "Animal Physiology",
              "question": "In deserts, heat death in camels is mainly due to:",
              "options": [
                "Scarcity of water",
                "Fall in blood volume",
                "Drinking lots of water in short time",
                "Heat"
              ],
              "answer": "Drinking lots of water in short time"
            },
            {
              "section": "Biology",
              "topic": "Excretory System",
              "question": "The glomerular filtrate is isotonic with plasma. Hence, plasma is:",
              "options": ["Isotonic", "Hypertonic", "Hypotonic", "Haemolytic"],
              "answer": "Isotonic"
            },
              {
                "section": "Biology",
                "topic": "Excretory System",
                "question": "Which of the following is also called Duct of Bellini?",
                "options": ["Proximal tubule", "Collecting duct", "Distal tubule", "Ascending limb of Henle’s loop"],
                "answer": "Collecting duct"
              },
              {
                "section": "Biology",
                "topic": "Nervous System",
                "question": "The parasympathetic nerves arise from:",
                "options": [
                  "Thoracico-lumbar nerves",
                  "Cervical nerves",
                  "Sacral nerves",
                  "3rd, 7th, 9th, and 10th cranial nerves and sacral spinal nerves"
                ],
                "answer": "3rd, 7th, 9th, and 10th cranial nerves and sacral spinal nerves"
              },
              {
                "section": "Biology",
                "topic": "Neurophysiology",
                "question": "Arbor vitae controls:",
                "options": [
                  "Voluntary action",
                  "Group muscle movement (involuntary)",
                  "Gland secretion (involuntary)",
                  "None of these"
                ],
                "answer": "None of these"
              },
              {
                "section": "Biology",
                "topic": "Nervous System",
                "question": "The cranial nerve which brings about reflex of vomiting and swallowing is:",
                "options": ["X", "VIII", "VII", "IV"],
                "answer": "X"
              },
              {
                "section": "Biology",
                "topic": "Endocrinology",
                "question": "Over secretion of glucocorticoid due to excess ACTH leads to:",
                "options": ["Grave’s disease", "Conn’s syndrome", "Cushing’s syndrome", "Simmond’s disease"],
                "answer": "Cushing’s syndrome"
              },
              {
                "section": "Biology",
                "topic": "Endocrinology",
                "question": "Calcitonin is used in the treatment of:",
                "options": ["Arthritis", "Fracture", "Osteoporosis", "Dislocation"],
                "answer": "Osteoporosis"
              },
              {
                "section": "Biology",
                "topic": "Endocrinology",
                "question": "Parathormone influences calcium absorption by regulating the metabolism of:",
                "options": ["Vitamin C", "Vitamin D", "Vitamin B6", "Enterogastrone"],
                "answer": "Vitamin D"
              },
              {
                "section": "Biology",
                "topic": "Sensory Systems",
                "question": "Motion sickness is caused due to excessive stimulation of:",
                "options": ["Vestibular apparatus", "Semicircular canals", "Cochlea", "Both a and b"],
                "answer": "Both a and b"
              },
              {
                "section": "Biology",
                "topic": "Cardiovascular System",
                "question": "The function of the vagus nerve innervating the heart is to:",
                "options": [
                  "Initiate the heartbeat",
                  "Reduce the heartbeat",
                  "Accelerate the heartbeat",
                  "Maintain constant heartbeat"
                ],
                "answer": "Reduce the heartbeat"
              },
              {
                "section": "Biology",
                "topic": "Vision",
                "question": "The direction of light striking the retina will be:",
                "options": [
                  "Photoreceptor cells → bipolar neurons → ganglionic cells → sensory nerve",
                  "Sensory nerve → bipolar neurons → ganglionic cells → photoreceptor cells",
                  "Sensory nerve → ganglionic cells → bipolar neurons → photoreceptor cells",
                  "Photoreceptor cells → ganglionic cells → bipolar neurons → sensory nerve"
                ],
                "answer": "Photoreceptor cells → bipolar neurons → ganglionic cells → sensory nerve"
              },
              {
                "section": "Biology",
                "topic": "Reproductive System",
                "question": "The scrotum regulates testis temperature through the action of the:",
                "options": ["Gubernaculum", "Cremaster muscle", "Epididymis", "Tunica albuginea"],
                "answer": "Cremaster muscle"
              },
              {
                "section": "Biology",
                "topic": "Reproductive Health",
                "question": "When mammary glands of a male develop similar to a female, the condition is called:",
                "options": ["Gonochorism", "Gynaecomastia", "Feminism", "Gynaecism"],
                "answer": "Gynaecomastia"
              },
              {
                "section": "Biology",
                "topic": "Embryology",
                "question": "The branch of embryology studying abnormal embryonic development is termed:",
                "options": ["Gerontology", "Teratology", "Embryology", "None of these"],
                "answer": "Teratology"
              },
              {
                "section": "Biology",
                "topic": "Embryology",
                "question": "Part of primitive gut is:",
                "options": ["Yolk sac", "Trophoblast", "Inner cell mass", "All of these"],
                "answer": "Yolk sac"
              },
              {
                "section": "Biology",
                "topic": "Embryology",
                "question": "Assertion (A): Cortical granules explode to block polyspermy. Reason (R): Depolarization of the egg membrane mobilizes Ca²⁺. Choose the correct option:",
                "options": [
                  "Both A and R are true, and R explains A",
                  "Both A and R are true, but R does not explain A",
                  "A is true, R is false",
                  "Both A and R are false"
                ],
                "answer": "Both A and R are true, and R explains A"
              },
              {
                "section": "Biology",
                "topic": "Conservation",
                "question": "Match IUCN categories (Column I) with descriptions (Column II):",
                "options": [
                  "A. Extinct → (i) Last individual died",
                  "B. Endangered → (ii) High extinction risk in medium term",
                  "C. Vulnerable → (iii) Very high extinction risk in near future",
                  "D. Rare → (iv) Small population at risk"
                ],
                "answer": "A = (i), B = (iii), C = (ii), D = (iv)"
              },
              {
                "section": "Biology",
                "topic": "Environmental Health",
                "question": "Carcinogens in tobacco smoke include:",
                "options": [
                  "Polonium 210 and polycyclic hydrocarbons",
                  "Radioactive polonium-210 and seven polycyclic hydrocarbons",
                  "Polonium-210 and heterocyclic hydrocarbons",
                  "Uranium and hydrocarbons"
                ],
                "answer": "Radioactive polonium-210 and seven polycyclic hydrocarbons"
              },
              {
                "section": "Biology",
                "topic": "Environmental Science",
                "question": "Industrial Toxicology Research Institute is situated in:",
                "options": ["Calcutta", "Bombay", "Lucknow", "Hyderabad"],
                "answer": "Lucknow"
              },
              {
                "section": "Biology",
                "topic": "Environmental Pollution",
                "question": "Sr-90 accumulates in the body through:",
                "options": ["Air", "Food web", "Water", "Contaminated soil"],
                "answer": "Food web"
              },
              {
                "section": "Biology",
                "topic": "Substance Abuse",
                "question": "Addiction of LSD leads to:",
                "options": ["Hallucination", "Kidney damage", "Mental disturbance", "Lung damage"],
                "answer": "Mental disturbance"
              },
              {
                "section": "Biology",
                "topic": "Global Health",
                "question": "Headquarter of World Health Organisation is located at:",
                "options": ["New York", "Geneva", "London", "Paris"],
                "answer": "Geneva"
              },
              {
                "section": "Biology",
                "topic": "Psychology",
                "question": "Match psychological disorders (Column I) with symptoms (Column II):",
                "options": [
                  "A. Mood disorders → 1. Distorted thought",
                  "B. Schizophrenia → 2. Depression",
                  "C. Borderline personality → 3. Sweating, nausea, trembling",
                  "D. Anxiety disorder → 4. Quarrelsome behaviour"
                ],
                "answer": "A = 2, B = 1, C = 4, D = 3"
              },
              {
                "section": "Biology",
                "topic": "Diseases",
                "question": "Match diseases (Column I) with causal agents (Column II):",
                "options": [
                  "A. AIDS → (p) Yersinia pestis",
                  "B. Syphilis → (q) Hepatitis-B virus",
                  "C. Viral jaundice → (r) Treponema pallidum",
                  "D. STD → (s) Neisseria gonorrhoeae"
                ],
                "answer": "A = (t), B = (r), C = (q), D = (s)"
              },
              {
                "section": "Biology",
                "topic": "Genetics",
                "question": "A dihybrid organism has the genotype:",
                "options": ["TTRR", "TtRr", "ttrr", "ttRr"],
                "answer": "TtRr"
              },
              {
                "section": "Biology",
                "topic": "Genetics",
                "question": "In a test cross, F₁ (AaBb) × aabb produces progeny with genotypes AaBb and aaBb more frequent than Aabb and aabb. The parents of F₁ were:",
                "options": [
                  "AABB and aabb",
                  "AAbb and aaBB",
                  "AAbb and AABB",
                  "AABB and aaBB"
                ],
                "answer": "AAbb and aaBB"
              },
              {
                "section": "Biology",
                "topic": "Neuroanatomy",
                "question": "Neurons in the dorsal root ganglion of spinal nerves are:",
                "options": ["Unipolar", "Pseudounipolar", "Bipolar", "Multipolar"],
                "answer": "Pseudounipolar"
              },
              {
                "section": "Biology",
                "topic": "Genetics",
                "question": "A lady (blood group B) claims a man (blood group B) is the father of her child (blood group O). The probability is:",
                "options": ["1/4%", "1/8%", "1/16%", "1/2%"],
                "answer": "1/2%"
              }
  
      ]
  },
  { 
    paperId: "Model Paper 4", 
    questions: [
        {
          "section": "Physics",
          "topic": "Laws of Motion",
          "question": "A 5 kg block is pulled on a frictionless horizontal surface by a 20 N force. What is its acceleration?",
          "options": ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
          "answer": "4 m/s²"
        },
        {
          "section": "Physics",
          "topic": "Laws of Motion",
          "question": "A block of mass M is placed on a rough inclined plane inclined at 45° with a coefficient of friction 0.5. If g = 10 m/s², what is the acceleration of the block down the plane?",
          "options": ["2.0 m/s²", "2.5 m/s²", "3.0 m/s²", "3.5 m/s²"],
          "answer": "3.5 m/s²"
        },
        {
          "section": "Physics",
          "topic": "Circular Motion",
          "question": "A car of mass 2000 kg is negotiating a circular road of radius 1000 m banked at 45° with a coefficient of friction 0.5. What is its maximum safe speed?",
          "options": ["172 m/s", "124 m/s", "99 m/s", "86 m/s"],
          "answer": "172 m/s"
        },
        {
          "section": "Physics",
          "topic": "Gravitation",
          "question": "Two bodies – one much heavier than the other – are released from rest and attract each other gravitationally. What is the motion of the system’s centre of mass?",
          "options": ["It moves towards the heavier body", "It moves towards the lighter body", "It moves perpendicular to the line joining the bodies", "It remains at rest"],
          "answer": "It remains at rest"
        },
        {
          "section": "Physics",
          "topic": "Rotational Motion",
          "question": "Four identical spheres (each of mass m and radius r) are placed at the corners of a square of side a. What is the moment of inertia of this system about an axis along one side of the square?",
          "options": ["(28/5) m r²", "2m a² + (24/5) m r²", "2m a² + (28/5) m r²", "4m a² + (24/5) m r²"],
          "answer": "2m a² + (28/5) m r²"
        },
        {
          "section": "Physics",
          "topic": "Gravitation",
          "question": "Two satellites of equal mass orbit Earth in concentric circles. If the orbital radius of satellite B is three times that of satellite A, what is the ratio of the centripetal force on B to that on A?",
          "options": ["1/3", "3", "1/9", "9"],
          "answer": "1/9"
        },
        {
          "section": "Physics",
          "topic": "Elasticity",
          "question": "A steel wire of length 2 m and cross-sectional area 22 mm² is stretched by 0.5 mm. Given Young’s modulus for steel is 1.22×10¹¹ N/m², which of the following (approximate) forces is required?",
          "options": ["51.1×10⁁ N", "41.1×10⁁ N", "31.1×10⁁ N", "21.1×10⁁ N"],
          "answer": "21.1×10⁁ N"
        },
        {
          "section": "Physics",
          "topic": "Elasticity",
          "question": "Two wires of the same material and length have diameters in the ratio 1:2 and are stretched by the same force. What is the ratio of the potential energy per unit volume stored in the thinner wire to that in the thicker wire?",
          "options": ["16 : 1", "4 : 1", "2 : 1", "1 : 1"],
          "answer": "16 : 1"
        },
        {
          "section": "Physics",
          "topic": "Properties of Fluids",
          "question": "A block suspended from a spring balance reads 60 N in air and 40 N when immersed in water. What is the block’s specific gravity?",
          "options": ["1", "2", "3", "4"],
          "answer": "3"
        },
        {
          "section": "Physics",
          "topic": "Thermodynamics",
          "question": "An ideal diatomic gas has internal energy U = 2.5PV. If it expands isobarically from 1 L to 2 L at 1 atm, what is the heat supplied to the gas?",
          "options": ["100 J", "250 J", "350 J", "50 J"],
          "answer": "350 J"
        },
        {
          "section": "Physics",
          "topic": "Thermodynamics",
          "question": "Two samples of the same ideal gas are plotted on a volume–temperature graph at different pressures, P1 and P2. If the line for the P1 sample lies above that for P2, what can be inferred about the pressures?",
          "options": ["P1 > P2", "P1 < P2", "P1 = P2", "Insufficient information"],
          "answer": "P1 > P2"
        },
        {
          "section": "Physics",
          "topic": "Oscillations and Waves",
          "question": "A particle executing simple harmonic motion with amplitude a has equal kinetic and potential energy at a certain displacement. What is that displacement?",
          "options": ["a/2", "a/√2", "a/4", "0"],
          "answer": "a/√2"
        },
        {
          "section": "Physics",
          "topic": "Oscillations and Waves",
          "question": "Two masses of 1 m and 2 m are connected by a massless spring of spring constant k and are initially in equilibrium. If the 1 m mass is suddenly removed, what is the amplitude of the resulting oscillation?",
          "options": ["√(g/k)", "√(g/k)", "√(g/(2k))", "√(g/(3k))"],
          "answer": "√(g/k)"
        },
        {
          "section": "Physics",
          "topic": "Oscillations and Waves",
          "question": "If the first overtone of a stretched string is 320 Hz, what is the frequency of its first harmonic?",
          "options": ["320 Hz", "640 Hz", "160 Hz", "480 Hz"],
          "answer": "160 Hz"
        },
        {
          "section": "Physics",
          "topic": "Oscillations and Waves",
          "question": "A sound wave with wavelength 0.40 m enters a circular tube. What is the minimum radius of the tube required to produce a sound intensity minimum at the detector?",
          "options": ["1.75 m", "0.175 m", "0.93 m", "9.3 m"],
          "answer": "0.175 m"
        },
        {
          "section": "Physics",
          "topic": "Electrostatics",
          "question": "Two point charges, –2Q and +Q, are placed on the x-axis at x = 0 and x = d respectively. At what x–coordinate is the net electric field zero?",
          "options": ["x = d/2", "x = d", "x = –d", "x = –d/2"],
          "answer": "x = –d/2"
        },
        {
          "section": "Physics",
          "topic": "Electrostatics",
          "question": "Six identical capacitors, each of capacitance c, are connected in a network. What is the equivalent capacitance between points A and B?",
          "options": ["c/4", "3c/4", "4c/3", "3c"],
          "answer": "4c/3"
        },
        {
          "section": "Physics",
          "topic": "Electrostatics",
          "question": "A capacitor (capacitance = aC) remains connected to a battery while a dielectric of constant K is inserted. What happens to the energy stored in the capacitor?",
          "options": ["It increases", "It decreases", "It remains the same", "It first increases then decreases"],
          "answer": "It increases"
        },
        {
          "section": "Physics",
          "topic": "Current Electricity",
          "question": "A 210 W electric bulb is operated for 5 minutes. Approximately how many calories of heat are produced?",
          "options": ["15,000", "1050", "63,000", "80,000"],
          "answer": "15,000"
        },
        {
          "section": "Physics",
          "topic": "Magnetic Effects of Current & Magnetism",
          "question": "In a square loop of uniform conducting wire carrying current, what is the magnetic field at its centre?",
          "options": ["Zero only at the centre", "Maximum at the centre", "Zero everywhere outside the loop", "Zero everywhere inside the loop"],
          "answer": "Zero only at the centre"
        },
        {
          "section": "Physics",
          "topic": "Magnetic Effects of Current & Magnetism",
          "question": "A magnet with magnetic moment M is rotated 360° in a uniform magnetic field. What is the net work done during one complete rotation?",
          "options": ["MH", "2MH", "2πMH", "Zero"],
          "answer": "Zero"
        },
        {
          "section": "Physics",
          "topic": "Electromagnetic Induction",
          "question": "A horizontal conductor oriented along the north–south direction falls under gravity in Earth’s magnetic field. What is observed regarding the induced emf?",
          "options": ["An induced current flows from south to north", "An induced current flows from north to south", "No induced emf is produced", "A significant induced emf is produced along its length"],
          "answer": "No induced emf is produced"
        },
        {
          "section": "Physics",
          "topic": "Magnetic Effects of Current & Magnetism",
          "question": "Two identical, coaxial circular loops carrying equal currents in the same direction are brought closer together. What happens to the currents in the loops?",
          "options": ["They increase", "They decrease", "They remain unchanged", "One increases while the other decreases"],
          "answer": "They decrease"
        },
        {
          "section": "Physics",
          "topic": "Electromagnetic Inductions & Alternating Currents",
          "question": "In an AC circuit with a constant rms voltage supply and purely resistive load, how does the current change when the frequency is varied over a wide range?",
          "options": ["It increases with frequency", "It decreases with frequency", "It remains constant", "It varies non–linearly with frequency"],
          "answer": "It remains constant"
        },
        {
          "section": "Physics",
          "topic": "Electromagnetic Waves",
          "question": "In an X–ray tube, if an accelerating potential of V volts is applied, what is the minimum wavelength of the emitted X–rays?",
          "options": ["hc/eV", "eV/hc", "hcV/e", "None of the above"],
          "answer": "hc/eV"
        },
        {
          "section": "Physics",
          "topic": "Optics",
          "question": "If a plane mirror moves toward you at 10 cm/s, at what speed does your image appear to approach you?",
          "options": ["110 cm/s", "110 cm/s", "120 cm/s", "120 cm/s"],
          "answer": "120 cm/s"
        },
        {
          "section": "Physics",
          "topic": "Optics",
          "question": "Monochromatic light of wavelength λ in a medium with refractive index n enters a denser medium with refractive index 2n. What is the wavelength in the denser medium?",
          "options": ["λ/2", "λ/(2n)", "λ/n", "2λ/n"],
          "answer": "λ/(2n)"
        },
        {
          "section": "Physics",
          "topic": "Optics",
          "question": "In Young’s double–slit experiment using white light, which description best matches the observed fringe pattern?",
          "options": ["A large number of colored fringes are seen", "Many colored fringes with a central white fringe appear", "Only a few colored fringes appear, with the first order violet fringe closer to the center", "Only a few colored fringes appear, with the first order red fringe closer to the center"],
          "answer": "Only a few colored fringes appear, with the first order violet fringe closer to the center"
        },
        {
          "section": "Physics",
          "topic": "Physics & Measurement",
          "question": "Two rods are measured as 3.323 cm and 3.321 cm using an instrument with least count 0.001 cm. What is the difference in length including the measurement uncertainty?",
          "options": ["0.002 ± 0.001 cm", "0.002 ± 0.000 cm", "0.002 ± 0.002 cm", "None of these"],
          "answer": "0.002 ± 0.002 cm"
        },
        {
          "section": "Physics",
          "topic": "Kinematics",
          "question": "Two bodies are dropped from the same height with a time gap of N seconds. If after n seconds the vertical separation is 1 m, which relation best represents n in terms of N and g?",
          "options": ["n = N", "n = (1/(gN))", "n = (1/(2gN))", "n = (1/(4gN))"],
          "answer": "n = (1/(2gN))"
        },
        {
          "section": "Physics",
          "topic": "Rotational Motion",
          "question": "A uniform rod of length l is pivoted at one end and released from rest in its unstable (vertical) position. After rotating through an angle θ, its angular velocity ω is given by which expression?",
          "options": ["ω = √((g/l) sinθ)", "ω = √((g/l) sin²θ)", "ω = √((g/l) cos²θ)", "ω = √((g/l) cosθ)"],
          "answer": "ω = √((g/l) cos²θ)"
        },
        {
          "section": "Physics",
          "topic": "Equilibrium",
          "question": "A boy and a man carry a uniform rod of length L such that the boy bears one–fourth of the total load. If the boy stands at one end, what is the distance of the man from the opposite end?",
          "options": ["L/3", "L/4", "2L/3", "3L/4"],
          "answer": "L/3"
        },
        {
          "section": "Physics",
          "topic": "Elasticity",
          "question": "Two rods of equal length and made of the same material have radii in the ratio 1:2. When the same torque is applied to both, what is the ratio of their angles of twist?",
          "options": ["1:1", "2:1", "4:1", "1:2"],
          "answer": "4:1"
        },
        {
          "section": "Physics",
          "topic": "Oscillations and Waves",
          "question": "An organ pipe shows successive resonance frequencies of 1310 Hz, 1834 Hz, and 2358 Hz. What is the frequency of its first overtone?",
          "options": ["262 Hz", "786 Hz", "1310 Hz", "1834 Hz"],
          "answer": "786 Hz"
        },
        {
          "section": "Physics",
          "topic": "Thermal Expansion",
          "question": "Two rods – one of copper (length L) and one of steel (length 2L) – are fixed between two walls so that the overall length does not change with temperature. With a rise in temperature, what happens to the individual rod lengths?",
          "options": ["Both increase", "Combined length increases while individual lengths remain unchanged", "Both remain the same", "One length increases while the other decreases so that the combined length remains unchanged"],
          "answer": "One length increases while the other decreases so that the combined length remains unchanged"
        },
        {
          "section": "Physics",
          "topic": "Electrostatics",
          "question": "A charge q is placed at the center of a cube of side L and an identical charge is placed outside such that its influence on one face (ABCD) is symmetric. What is the net electric flux through face ABCD?",
          "options": ["q/(4ε₀)", "Zero", "q/(2ε₀)", "q/(3ε₀)"],
          "answer": "Zero"
        },
        {
          "section": "Physics",
          "topic": "Electrostatics",
          "question": "A parallel–plate capacitor of capacitance aC is modified by inserting a dielectric in two different ways. How do the resulting capacitances compare to aC?",
          "options": ["Both are greater than aC", "Only one is greater than aC", "Both are less than aC", "They remain equal to aC"],
          "answer": "Both are greater than aC"
        },
        {
          "section": "Physics",
          "topic": "Current Electricity",
          "question": "Three resistors are connected in a T–shaped network. If the current measured through a 4 Ω resistor is 1.57 mA, what is the current in that resistor?",
          "options": ["0.93 mA", "1.42 mA", "2.5 mA", "1.57 mA"],
          "answer": "1.57 mA"
        },
        {
          "section": "Physics",
          "topic": "Optics",
          "question": "A parallel beam of light with power 60 W is incident normally on a plane surface that absorbs 40% and reflects 60% of the light. What is the force exerted on the surface by the light?",
          "options": ["83.2×10^? N", "73.2×10^? N", "75.12×10^? N", "85.12×10^? N"],
          "answer": "73.2×10^? N"
        },
        {
          "section": "Physics",
          "topic": "Electromagnetic Waves",
          "question": "If the dielectric constant of a medium is 4 and the speed of light in air is 3×10⁸ m/s, what is the speed of electromagnetic waves in that medium?",
          "options": ["1.63×10⁸ m/s", "90.75×10⁸ m/s", "81.5×10⁸ m/s", "102×10⁸ m/s"],
          "answer": "81.5×10⁸ m/s"
        },
        {
          "section": "Physics",
          "topic": "Structure of Atom",
          "question": "In a hydrogen atom, which electron transition results in the emission of the highest energy photon?",
          "options": ["n=2 to n=1", "n=3 to n=1", "n=4 to n=1", "n=4 to n=2"],
          "answer": "n=4 to n=1"
        },
        {
          "section": "Physics",
          "topic": "Electronic Devices",
          "question": "In a half–wave rectifier circuit supplied with an rms voltage of 200 V, what is the approximate DC voltage across the filter capacitor?",
          "options": ["500 V", "200 V", "283 V", "141 V"],
          "answer": "283 V"
        },
        {
          "section": "Physics",
          "topic": "Optics",
          "question": "In Fraunhofer’s single–slit diffraction experiment, which statement correctly describes the width of the central bright band?",
          "options": ["It is twice the width of the third bright band", "It is equal to the width of the second bright band", "It is half the width of the fifth bright band", "It is one–quarter the width of the seventh bright band"],
          "answer": "It is twice the width of the third bright band"
        },
        {
          "section": "Physics",
          "topic": "Oscillations and Waves",
          "question": "An ideal string fixed at both ends has a fundamental frequency of 110 Hz under a certain tension. If the tension is increased by 21%, what will be the new fundamental frequency of the string?",
          "options": ["110 Hz", "121 Hz", "132 Hz", "140 Hz"],
          "answer": "121 Hz"
        },
        {
          "section": "Physics",
          "topic": "Optics",
          "question": "A light ray is incident perpendicularly on one face of a 90° prism and undergoes total internal reflection at the glass–air interface with a reflection angle of 45°. What can be concluded about the refractive index n of the prism?",
          "options": ["n < 1/2", "n > 2", "n < 2", "n > 1/2"],
          "answer": "n > 2"
        },
          {
            "section": "Chemistry",
            "topic": "Inorganic Chemistry - Periodic Trends",
            "question": "Which order of ionic radii is correct?",
            "options": [
              "Li⁺ < Be²⁺ < Mg²⁺",
              "H⁻ < Li⁺ < H⁺",
              "O < F < Ne",
              "Na⁺ > F⁻ > O²⁻"
            ],
            "answer": "H⁻ < Li⁺ < H⁺"
          },
          {
            "section": "Chemistry",
            "topic": "Physical Chemistry - Gas Laws",
            "question": "At 0°C, the density of a gaseous oxide at 2 bar equals that of dinitrogen at 5 bar. What is the molecular mass of the oxide?",
            "options": ["70 g/mol", "35 g/mol", "140 g/mol", "280 g/mol"],
            "answer": "70 g/mol"
          },
          {
            "section": "Chemistry",
            "topic": "Inorganic Chemistry - Hybridization",
            "question": "Which compound does NOT exhibit sp³d hybridization?",
            "options": ["SF₄", "BrCl₃", "XeOF₂", "XeF₄"],
            "answer": "XeF₄"
          },
          {
            "section": "Chemistry",
            "topic": "Redox Reactions",
            "question": "How many moles of K₂Cr₂O₇ in acidic medium react completely with 1 mole of KHC₂O₄?",
            "options": ["2/3", "1/3", "3", "6"],
            "answer": "1/3"
          },
          {
            "section": "Chemistry",
            "topic": "Atomic Structure - Quantum Numbers",
            "question": "How many radial nodes and nodal planes exist for an orbital with n=4, l=1?",
            "options": ["3,1", "2,1", "2,0", "4,0"],
            "answer": "2,1"
          },
          {
            "section": "Chemistry",
            "topic": "Inorganic Chemistry - Chemical Bonding",
            "question": "The structure of diborane (B₂H₆) contains:",
            "options": [
              "Four 2c-2e bonds and two 3c-2e bonds",
              "Two 2c-2e bonds and four 3c-2e bonds",
              "Two 2c-3e bonds and two 3c-3e bonds",
              "Four 2c-2e bonds and four 3c-2e bonds"
            ],
            "answer": "Four 2c-2e bonds and two 3c-2e bonds"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - Reaction Identification",
            "question": "Heating oxalic acid with conc. H₂SO₄ produces which gases?",
            "options": [
              "CO₂ and CO",
              "CO and H₂O",
              "SO₂ and CO₂",
              "None of these"
            ],
            "answer": "CO₂ and CO"
          },
          {
            "section": "Chemistry",
            "topic": "Inorganic Chemistry - p-Block Elements",
            "question": "Which compound contains O-O linkage?",
            "options": ["H₃PO₃", "H₄P₂O₇", "H₄P₂O₆", "H₃PO₄"],
            "answer": "H₄P₂O₆"
          },
          {
            "section": "Chemistry",
            "topic": "Coordination Chemistry",
            "question": "Which complex ion has no d-electrons in the central metal atom?",
            "options": [
              "[MnO₄⁻]",
              "[Co(NH₃)₆]³⁺",
              "[Fe(CN)₆]³⁻",
              "[Cr(H₂O)₆]³⁺"
            ],
            "answer": "[MnO₄⁻]"
          },
          {
            "section": "Chemistry",
            "topic": "Physical Chemistry - Solutions",
            "question": "Observed molecular weight of AgNO₃ is 92.64 (theoretical = 170). What is its degree of dissociation?",
            "options": ["60%", "83.5%", "46.7%", "60.23%"],
            "answer": "83.5%"
          },
          {
            "section": "Chemistry",
            "topic": "Electrochemistry",
            "question": "The SRP of metals X, Y, Z are 0.52V, -3.03V, -1.18V. Order of reducing power:",
            "options": ["Y > Z > X", "X > Y > Z", "Z > Y > X", "Z > X > Y"],
            "answer": "Y > Z > X"
          },
          {
            "section": "Chemistry",
            "topic": "Solid State - Crystal Lattices",
            "question": "A cubic compound has A at corners and B at face centers. Formula?",
            "options": ["AB", "AB₂", "AB₃", "A₃B"],
            "answer": "AB₃"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - IUPAC Nomenclature",
            "question": "Correct name for (E,Z)-2,4-hexadiene structure:",
            "options": [
              "(E,E)-2,4-hexadiene",
              "(Z,Z)-2,4-hexadiene",
              "(E,Z)-3,5-hexadiene",
              "(Z,E)-2,4-hexadiene"
            ],
            "answer": "(Z,E)-2,4-hexadiene"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - Halogen Derivatives",
            "question": "Hydrolysis of C₅H₁₀Cl₂ gives a compound producing yellow precipitate with I₂/NaOH. Identify the compound:",
            "options": [
              "CH₃CH₂CCl₂CH₂CH₃",
              "CH₃CHClCH₂CH₂CH₃",
              "CH₂ClCH₂CH₂CH₂CH₂Cl",
              "CH₃CH₂CHClCH₂Cl"
            ],
            "answer": "CH₃CHClCH₂CH₂CH₃"
          },
          {
            "section": "Chemistry",
            "topic": "Thermodynamics",
            "question": "Heat of formation of 2 moles NH₃ is -90 kJ. Given H-H (435 kJ/mol) and N-H (390 kJ/mol) bond energies, calculate N≡N bond energy:",
            "options": ["-472.5 kJ", "-945 kJ", "472.5 kJ", "945 kJ"],
            "answer": "945 kJ"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - Isomerism",
            "question": "Identify a pair of isomers:",
            "options": [
              "Ethanol & dimethyl ether",
              "Methanol & dimethyl ether",
              "Propanone & ethanol",
              "Propionic acid & acetone"
            ],
            "answer": "Ethanol & dimethyl ether"
          },
          {
            "section": "Chemistry",
            "topic": "Metallurgy",
            "question": "In the blast furnace, the highest temperature zone is:",
            "options": [
              "Slag zone (middle)",
              "Reduction zone (top)",
              "Combustion zone (base)",
              "Fusion zone (middle)"
            ],
            "answer": "Combustion zone (base)"
          },
          {
            "section": "Chemistry",
            "topic": "Chemical Kinetics",
            "question": "For a reaction A → B, rate = k[A]. If [A] is doubled, rate becomes:",
            "options": ["Same", "Doubled", "Quadrupled", "Half"],
            "answer": "Doubled"
          },
          {
            "section": "Chemistry",
            "topic": "Surface Chemistry",
            "question": "Which is NOT a colloid?",
            "options": ["Milk", "Smoke", "Blood", "Sugar solution"],
            "answer": "Sugar solution"
          },
          {
            "section": "Chemistry",
            "topic": "Biomolecules",
            "question": "Which is NOT part of a nucleotide?",
            "options": [
              "Ribose/deoxyribose",
              "Nitrogenous base",
              "Phosphate group",
              "Peptides"
            ],
            "answer": "Peptides"
          } ,
          {
            "section": "Chemistry",
            "topic": "Chemical Equilibrium",
            "question": "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what happens if pressure is increased?",
            "options": [
              "Favors forward reaction",
              "Favors backward reaction",
              "No effect",
              "Depends on temperature"
            ],
            "answer": "Favors forward reaction"
          },
          {
            "section": "Chemistry",
            "topic": "Electrochemistry",
            "question": "In an electrolytic cell, 1L of 1M MnO₄⁻ is reduced to MnO₄²⁻. How many Faradays are required?",
            "options": ["10 F", "0.1 F", "1×10⁻⁴ F", "1×10⁻² F"],
            "answer": "0.1 F"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - Reaction Mechanisms",
            "question": "Hunsdiecker reaction is exhibited by:",
            "options": ["Aldehydes", "Ketones", "Carboxylic acids", "All of these"],
            "answer": "Carboxylic acids"
          },
          {
            "section": "Chemistry",
            "topic": "Coordination Compounds",
            "question": "Which complex shows geometrical isomerism?",
            "options": [
              "[Co(NH₃)₆]³⁺",
              "[PtCl₂(NH₃)₂]",
              "[Ni(CO)₄]",
              "[Fe(CN)₆]³⁻"
            ],
            "answer": "[PtCl₂(NH₃)₂]"
          },
          {
            "section": "Chemistry",
            "topic": "Thermodynamics",
            "question": "For an ideal gas during free expansion:",
            "options": [
              "ΔU = 0",
              "ΔH = 0",
              "q = 0",
              "All of these"
            ],
            "answer": "All of these"
          },
          {
            "section": "Chemistry",
            "topic": "p-Block Elements",
            "question": "Which nitrogen oxide is paramagnetic?",
            "options": ["N₂O", "NO", "N₂O₃", "N₂O₅"],
            "answer": "NO"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - Carboxylic Acids",
            "question": "Reaction of RCOCl with NH₃ produces:",
            "options": ["Amide", "Ester", "Acid anhydride", "Nitrite"],
            "answer": "Amide"
          },
          {
            "section": "Chemistry",
            "topic": "Chemical Kinetics",
            "question": "Units of rate constant for a first-order reaction:",
            "options": ["mol L⁻¹s⁻¹", "s⁻¹", "L mol⁻¹s⁻¹", "L²mol⁻²s⁻¹"],
            "answer": "s⁻¹"
          },
          {
            "section": "Chemistry",
            "topic": "d-Block Elements",
            "question": "Lanthanoid contraction is due to:",
            "options": [
              "Poor shielding of 4f electrons",
              "High nuclear charge",
              "Small atomic size",
              "Both (a) & (b)"
            ],
            "answer": "Both (a) & (b)"
          },
          {
            "section": "Chemistry",
            "topic": "Solutions",
            "question": "Vapour pressure of solution containing 3 mol A (Pₐ=600 mm Hg) and 1 mol B is 550 mm Hg. What is P₆?",
            "options": ["400 mm", "200 mm", "300 mm", "500 mm"],
            "answer": "300 mm"
          },
          {
            "section": "Chemistry",
            "topic": "Atomic Structure",
            "question": "Bohr radius for n=2 hydrogen atom:",
            "options": ["0.53Å", "1.06Å", "2.12Å", "4.77Å"],
            "answer": "2.12Å"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - Polymers",
            "question": "Nylon-6 is obtained from:",
            "options": [
              "Caprolactam",
              "Adipic acid + Hexamethylene diamine",
              "Terephthalic acid + Ethylene glycol",
              "Styrene"
            ],
            "answer": "Caprolactam"
          },
          {
            "section": "Chemistry",
            "topic": "Environmental Chemistry",
            "question": "Primary pollutant responsible for acid rain:",
            "options": ["CO₂", "SO₂", "CH₄", "NH₃"],
            "answer": "SO₂"
          },
          {
            "section": "Chemistry",
            "topic": "Coordination Chemistry",
            "question": "Crystal field splitting energy for octahedral [CoF₆]³⁻:",
            "options": [
              "High-spin complex",
              "Low-spin complex",
              "Depends on ligand",
              "Cannot determine"
            ],
            "answer": "High-spin complex"
          },
          {
            "section": "Chemistry",
            "topic": "Biomolecules",
            "question": "Enzyme catalysis differs from chemical catalysis by:",
            "options": [
              "High specificity",
              "Optimum temperature",
              "Working in aqueous medium",
              "All of these"
            ],
            "answer": "All of these"
          },
          {
            "section": "Chemistry",
            "topic": "Redox Reactions",
            "question": "Oxidation state of Mn in KMnO₄:",
            "options": ["+2", "+4", "+6", "+7"],
            "answer": "+7"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - Amines",
            "question": "Hinsberg reagent is:",
            "options": [
              "C₆H₅SO₂Cl",
              "(CH₃CO)₂O",
              "NH₂-NH₂",
              "C₆H₅COCl"
            ],
            "answer": "C₆H₅SO₂Cl"
          },
          {
            "section": "Chemistry",
            "topic": "Surface Chemistry",
            "question": "Tyndall effect is observed in:",
            "options": [
              "True solution",
              "Colloidal solution",
              "Suspension",
              "All of these"
            ],
            "answer": "Colloidal solution"
          },
          {
            "section": "Chemistry",
            "topic": "Chemical Bonding",
            "question": "Angle in SF₄ molecule:",
            "options": ["90°", "109.5°", "120°", "180°"],
            "answer": "90°"
          },
          {
            "section": "Chemistry",
            "topic": "Metallurgy",
            "question": "Froth floatation process uses:",
            "options": [
              "Pine oil",
              "Sodium ethyl xanthate",
              "Both (a) & (b)",
              "NaOH"
            ],
            "answer": "Both (a) & (b)"
          },
          {
            "section": "Chemistry",
            "topic": "Organic Chemistry - Aromatic Compounds",
            "question": "Directive influence of -NO₂ group in nitration:",
            "options": [
              "meta-directing",
              "ortho/para-directing",
              "No effect",
              "Depends on solvent"
            ],
            "answer": "meta-directing"
          },
          {
            "section": "Chemistry",
            "topic": "Solutions",
            "question": "Depression in freezing point formula:",
            "options": [
              "ΔTf = iKfm",
              "ΔTb = iKbm",
              "π = iCRT",
              "P = χP⁰"
            ],
            "answer": "ΔTf = iKfm"
          },
          {
            "section": "Chemistry",
            "topic": "Nuclear Chemistry",
            "question": "Isotopes differ in:",
            "options": [
              "Atomic number",
              "Mass number",
              "Number of electrons",
              "Chemical properties"
            ],
            "answer": "Mass number"
          },
          {
            "section": "Chemistry",
            "topic": "Hydrocarbons",
            "question": "Product of ozonolysis of 2-pentene:",
            "options": [
              "Two formaldehyde molecules",
              "Formaldehyde + ketone",
              "Two ketones",
              "Aldehyde + carboxylic acid"
            ],
            "answer": "Formaldehyde + ketone"
          },
          {
            "section": "Chemistry",
            "topic": "Practical Chemistry",
            "question": "In Lassaigne's test, nitrogen is detected as:",
            "options": [
              "NaCN",
              "NaNH₂",
              "Na₄[Fe(CN)₆]",
              "Prussian blue complex"
            ],
            "answer": "Prussian blue complex"
          },
          
            {
              "section": "Biology",
              "topic": "Botany - Pteridophytes",
              "question": "Which one of the following is called maiden‐hair fern?",
              "options": [
                "Dryopteris",
                "Pteris",
                "Adiantum",
                "Lycopodium"
              ],
              "answer": "Adiantum"
            },
            {
              "section": "Biology",
              "topic": "Botany - Vascular Tissue",
              "question": "Bicollateral conjoint vascular bundles have:",
              "options": [
                "Xylem and phloem arranged alternately on different radii",
                "Xylem and phloem situated at the same radius with two groups of phloem on opposite sides of the xylem",
                "Xylem and phloem arranged on the same radius with only one group of phloem on the outer side",
                "Phloem completely surrounding the xylem"
              ],
              "answer": "Xylem and phloem situated at the same radius with two groups of phloem on opposite sides of the xylem"
            },
            {
              "section": "Biology",
              "topic": "Cell Biology - Cellular Respiration",
              "question": "Which of the following processes makes direct use of oxygen?",
              "options": [
                "Glycolysis",
                "Fermentation",
                "Electron transport",
                "Krebs citric acid cycle"
              ],
              "answer": "Electron transport"
            },
            {
              "section": "Biology",
              "topic": "Plant Anatomy - Leaf Structure",
              "question": "The large, empty, and colorless cells present at intervals on the upper surface of a grass leaf are called:",
              "options": [
                "Bulliform cells",
                "Palisade parenchyma",
                "Spongy parenchyma",
                "Accessory cells"
              ],
              "answer": "Bulliform cells"
            },
            {
              "section": "Biology",
              "topic": "Plant Physiology",
              "question": "What is the method of inducing early flowering by pretreating seeds with a low temperature called?",
              "options": [
                "Photoperiodism",
                "Abscission",
                "Vernalisation",
                "Phototaxis"
              ],
              "answer": "Vernalisation"
            },
            {
              "section": "Biology",
              "topic": "Plant Biotechnology",
              "question": "Which technique is employed to produce haploids in Datura?",
              "options": [
                "Meristem culture",
                "Anther culture",
                "Embryo culture",
                "Protoplast culture"
              ],
              "answer": "Anther culture"
            },
            {
              "section": "Biology",
              "topic": "Genetics - Immunogenetics",
              "question": "Severe Combined Immunodeficiency (SCID) is caused by a defect in the gene coding for which enzyme?",
              "options": [
                "Adenosine transaminase",
                "Guanosine transaminase",
                "Adenosine deaminase",
                "Guanosine deaminase"
              ],
              "answer": "Adenosine deaminase"
            },
            {
              "section": "Biology",
              "topic": "Botany - Morphological Adaptations",
              "question": "The leaves in certain plants are modified into tendrils, hook pitchers, and bladders. Which of the following correctly matches the plants with these modifications respectively?",
              "options": [
                "Sweet pea, cat’s nail, Nepenthes, Utricularia",
                "Sweet pea, cat’s nail, Utricularia, Nepenthes",
                "Nepenthes, cat’s nail, sweet pea, Utricularia",
                "Nepenthes, sweet pea, cat’s nail, Utricularia"
              ],
              "answer": "Sweet pea, cat’s nail, Nepenthes, Utricularia"
            },
            {
              "section": "Biology",
              "topic": "Microbiology - Virology",
              "question": "A lysogenic cycle in a bacteriophage involves:",
              "options": [
                "Early lysis of the host cell",
                "Formation of a prophase-like structure",
                "Lysis by a specific lambda lytic protein",
                "A period of integration of the viral genome into the host genome"
              ],
              "answer": "A period of integration of the viral genome into the host genome"
            },
            {
              "section": "Biology",
              "topic": "Plant Reproduction - Embryo Sac Structure",
              "question": "Which of the following lists all the cell types found in a typical mature embryo sac of angiosperms?",
              "options": [
                "Egg cell, two synergids, central cell (with two polar nuclei), and three antipodal cells",
                "Egg cell, one synergid, central cell (with two polar nuclei), and two antipodal cells",
                "Two egg cells, two synergids, central cell, and two antipodal cells",
                "Egg cell, two synergids, central cell (with one polar nucleus), and three antipodal cells"
              ],
              "answer": "Egg cell, two synergids, central cell (with two polar nuclei), and three antipodal cells"
            },
            {
              "section": "Biology",
              "topic": "Genetics - Transformation",
              "question": "What is the genetic alteration of a cell’s genome called?",
              "options": [
                "Transformation",
                "Reverse transcription",
                "Genome conversion",
                "Invasion"
              ],
              "answer": "Transformation"
            },
            {
              "section": "Biology",
              "topic": "Plant Anatomy - Xylem Structure",
              "question": "Unlike vessels, water in tracheids moves through specialized structures known as:",
              "options": [
                "Pits",
                "Pores",
                "Sieve plates",
                "Continuous tubes"
              ],
              "answer": "Pits"
            },
            {
              "section": "Biology",
              "topic": "Plant Anatomy - Endodermis",
              "question": "The primary walls of the endodermis are impregnated with which substance?",
              "options": [
                "Lignin",
                "Wax",
                "Proteins",
                "Suberin"
              ],
              "answer": "Suberin"
            },
            {
              "section": "Biology",
              "topic": "Taxonomy - Protistology",
              "question": "Which of the following statements about the kingdom Protista is not true?",
              "options": [
                "It is an artificial grouping",
                "Its members are placed there as a matter of convenience",
                "The group represents a closely related evolutionary lineage",
                "It contains unicellular, colonial, and multicellular organisms"
              ],
              "answer": "The group represents a closely related evolutionary lineage"
            },
            {
              "section": "Biology",
              "topic": "Plant Reproduction",
              "question": "Which of the following flowering arrangements promotes self-pollination?",
              "options": [
                "Monoecious",
                "Dioecious",
                "Dichogamous",
                "None of these"
              ],
              "answer": "None of these"
            },
            {
              "section": "Biology",
              "topic": "Cell Biology - Fermentation",
              "question": "The usefulness of fermentation as a means of deriving energy is limited because:",
              "options": [
                "It cannot generate enough ADP",
                "It produces excessive amounts of NH₂ groups",
                "The end products are toxic to the producer",
                "It uses more energy than it produces"
              ],
              "answer": "The end products are toxic to the producer"
            },
            {
              "section": "Biology",
              "topic": "Virology - Bacteriophage Structure",
              "question": "Which of the following lists the structural components of a typical bacteriophage in the correct order?",
              "options": [
                "Tail fibres, head, sheath, collar",
                "Sheath, collar, head, tail fibres",
                "Head, sheath, collar, tail fibres",
                "Collar, tail fibres, head, sheath"
              ],
              "answer": "Head, sheath, collar, tail fibres"
            },
            {
              "section": "Biology",
              "topic": "Plant Physiology - Photosynthesis",
              "question": "Which component of the photosynthetic apparatus is primarily responsible for the capture of light energy?",
              "options": [
                "Chlorophyll",
                "Carotenoids",
                "Phycobilins",
                "All of these"
              ],
              "answer": "Chlorophyll"
            },
            {
              "section": "Biology",
              "topic": "Immunology",
              "question": "Which protein is produced by most cells in response to viral infection and interferes with virus production?",
              "options": [
                "Complement",
                "Interferon",
                "Lysozyme",
                "Mucus"
              ],
              "answer": "Interferon"
            },
            {
              "section": "Biology",
              "topic": "Molecular Biology - Nucleotide Structure",
              "question": "Which of the following is not a component of nucleotide molecules?",
              "options": [
                "Ribose or deoxyribose",
                "Nitrogenous organic bases",
                "Phosphate groups",
                "Peptides"
              ],
              "answer": "Peptides"
            },
            {
              "section": "Biology",
              "topic": "Genetics",
              "question": "Which of the following processes is associated with meiosis but not with mitosis?",
              "options": [
                "DNA replication prior to division",
                "Cytokinesis",
                "Crossing over",
                "The prophase-metaphase-anaphase-telophase sequence"
              ],
              "answer": "Crossing over"
            },
            {
              "section": "Biology",
              "topic": "DNA Replication",
              "question": "During DNA replication, each new DNA molecule consists of:",
              "options": [
                "Only one newly synthesized strand",
                "Only the original DNA strands",
                "Short segments spliced together by DNA polymerase",
                "One original strand and one newly synthesized strand"
              ],
              "answer": "One original strand and one newly synthesized strand"
            },
            {
              "section": "Biology",
              "topic": "Gene Structure",
              "question": "Regions of DNA that do not code for proteins are called:",
              "options": [
                "Anticodons",
                "Codons",
                "Exons",
                "Introns"
              ],
              "answer": "Introns"
            },
            {
              "section": "Biology",
              "topic": "Cell Biology - Metabolism",
              "question": "The series of chemical reactions that convert glucose to pyruvic acid in the cell is known as:",
              "options": [
                "Aerobic respiration",
                "Anaerobic respiration",
                "The citric acid cycle",
                "Glycolysis"
              ],
              "answer": "Glycolysis"
            },
            {
              "section": "Biology",
              "topic": "Gene",
              "question": "A sequence of nucleotides that provides instructions for making a functional protein is called a:",
              "options": [
                "Codon",
                "Anticodon",
                "Peptide bond",
                "Gene"
              ],
              "answer": "Gene"
            },
            {
              "section": "Biology",
              "topic": "Cytoskeleton",
              "question": "Microtubules are essential components of which of the following cellular structures?",
              "options": [
                "Actin filaments",
                "Cilia, flagella, centrioles, and spindle fibers",
                "Changes in cell shape",
                "They are the smallest cytoskeletal elements"
              ],
              "answer": "Cilia, flagella, centrioles, and spindle fibers"
            },
            {
              "section": "Biology",
              "topic": "Cell Biology - Metabolism",
              "question": "Which energy-bearing compound initiates metabolic reactions in cells?",
              "options": [
                "NADP",
                "NAD",
                "FAD",
                "c-AMP"
              ],
              "answer": "c-AMP"
            },
            {
              "section": "Biology",
              "topic": "Genetics",
              "question": "The transfer of genes between homologous chromosomes during synapsis is called:",
              "options": [
                "Linkage",
                "Crossing over",
                "Dominance",
                "Independent assortment"
              ],
              "answer": "Crossing over"
            },
            {
              "section": "Biology",
              "topic": "Cell Biology - Protozoa",
              "question": "What is the main function of the contractile vacuole in protozoa?",
              "options": [
                "Nutrition",
                "Excretion",
                "Respiration",
                "Osmoregulation"
              ],
              "answer": "Osmoregulation"
            },
            {
              "section": "Biology",
              "topic": "Membrane Transport",
              "question": "Which of the following processes requires an input of energy?",
              "options": [
                "Diffusion",
                "Osmosis",
                "Active transport",
                "Facilitated diffusion"
              ],
              "answer": "Active transport"
            },
            {
              "section": "Biology",
              "topic": "Plant Biotechnology",
              "question": "Gibberellin is obtained from which organism?",
              "options": [
                "Phytophthora infestans",
                "Fusarium moniliforme",
                "Gibberella fujikuroi",
                "Alternaria solani"
              ],
              "answer": "Gibberella fujikuroi"
            },
            {
              "section": "Biology",
              "topic": "Plant Physiology - Stomatal Regulation",
              "question": "Which theory best explains the closure of stomata?",
              "options": [
                "Starch glucose theory",
                "Munch theory",
                "ABA theory",
                "Active K⁺ transport theory"
              ],
              "answer": "Active K⁺ transport theory"
            },
            {
              "section": "Biology",
              "topic": "Cell Biology - Endoplasmic Reticulum",
              "question": "Rough endoplasmic reticulum differs from smooth endoplasmic reticulum due to the presence of:",
              "options": [
                "DNA",
                "A nucleus",
                "Ribosomes",
                "Ergastic substances"
              ],
              "answer": "Ribosomes"
            },
            {
              "section": "Biology",
              "topic": "Electron Transport",
              "question": "Which molecule is responsible for transferring electrons in the electron transport chain?",
              "options": [
                "Quantasome",
                "F–particles",
                "Phytochrome",
                "Cytochrome"
              ],
              "answer": "Cytochrome"
            },
            {
              "section": "Biology",
              "topic": "Photosynthesis",
              "question": "Photolysis of water in photosynthesis is useful for:",
              "options": [
                "Reduction of NADP",
                "Oxidation of NADP",
                "Oxidation of FAD",
                "None of the above"
              ],
              "answer": "Reduction of NADP"
            },
            {
              "section": "Biology",
              "topic": "Plant Water Relations",
              "question": "Plants may wilt when exposed to excessive fertilizers due to:",
              "options": [
                "Exosmosis",
                "Endosmosis",
                "Imbibition",
                "All of these"
              ],
              "answer": "Exosmosis"
            },
            {
              "section": "Biology",
              "topic": "Microbiology - Genetic Exchange",
              "question": "The transfer of genetic material from one bacterium to another by a virus is called:",
              "options": [
                "Translation",
                "Transduction",
                "Conjugation",
                "Transformation"
              ],
              "answer": "Transduction"
            },
            {
              "section": "Biology",
              "topic": "Photosynthesis",
              "question": "In photosynthesis, which process involves the oxidation of water?",
              "options": [
                "Oxidation of CO₂",
                "Reduction of H₂O",
                "Oxidation of H₂O",
                "Reduction of NH₃"
              ],
              "answer": "Oxidation of H₂O"
            },
            {
              "section": "Biology",
              "topic": "Ecology",
              "question": "Which diagram best represents the pyramid of numbers in a forest ecosystem?",
              "options": [
                "Diagram D",
                "Diagram A",
                "Diagram B",
                "Diagram C"
              ],
              "answer": "Diagram D"
            },
            {
              "section": "Biology",
              "topic": "RNA Processing",
              "question": "RNA processing occurs:",
              "options": [
                "In the cytoplasm",
                "Simultaneously with transcription",
                "After RNA is transcribed",
                "As a mechanism to discard old RNA"
              ],
              "answer": "After RNA is transcribed"
            },
            {
              "section": "Biology",
              "topic": "Translation",
              "question": "During protein synthesis, an anticodon of a tRNA pairs with:",
              "options": [
                "Amino acids in the polypeptide",
                "DNA nucleotide bases",
                "rRNA nucleotide bases",
                "mRNA nucleotide bases"
              ],
              "answer": "mRNA nucleotide bases"
            },
            {
              "section": "Biology",
              "topic": "DNA Replication",
              "question": "Which enzyme is primarily responsible for adding new nucleotides during DNA replication?",
              "options": [
                "Helicase",
                "DNA polymerase III",
                "RNA polymerase II",
                "Ribozymes"
              ],
              "answer": "DNA polymerase III"
            },
            {
              "section": "Biology",
              "topic": "Plant Biotechnology",
              "question": "Embryo culture is performed to:",
              "options": [
                "Develop seeds quickly",
                "Raise a large number of plants",
                "Overcome dormancy and multiply rare hybrids",
                "Avoid fertilization"
              ],
              "answer": "Overcome dormancy and multiply rare hybrids"
            },
            {
              "section": "Biology",
              "topic": "Gene Editing",
              "question": "The enzyme commonly referred to as 'molecular scissors' is:",
              "options": [
                "DNA ligase",
                "Restriction endonuclease",
                "RNA polymerase",
                "DNA polymerase"
              ],
              "answer": "Restriction endonuclease"
            },
            {
              "section": "Biology",
              "topic": "Gene Regulation",
              "question": "Restriction endonucleases cut DNA at specific sites without destroying cellular DNA because:",
              "options": [
                "The cellular DNA lacks these sites",
                "The susceptible sites are masked by proteins",
                "The restriction sites are modified by methylation",
                "The sites are located in non-coding regions"
              ],
              "answer": "The restriction sites are modified by methylation"
            },
            {
              "section": "Biology",
              "topic": "Animal Biology - Body Symmetry",
              "question": "Radial symmetry is usually associated with which mode of life in animals?",
              "options": [
                "Creeping locomotion",
                "Lower grade of organization",
                "Sedentary mode of life",
                "Aquatic mode of life"
              ],
              "answer": "Sedentary mode of life"
            },
            {
              "section": "Biology",
              "topic": "Histology",
              "question": "Which of the following tissues is typically transparent?",
              "options": [
                "Tendon",
                "Ligament",
                "Fibrous cartilage",
                "Hyaline cartilage"
              ],
              "answer": "Hyaline cartilage"
            },
            {
              "section": "Biology",
              "topic": "Human Anatomy - Skin",
              "question": "The keratinized dead layer of skin is composed of which type of cells?",
              "options": [
                "Stratified squamous epithelial cells",
                "Simple cuboidal cells",
                "Simple columnar cells",
                "Stratified columnar epithelial cells"
              ],
              "answer": "Stratified squamous epithelial cells"
            },
            {
              "section": "Biology",
              "topic": "Entomology",
              "question": "Colleterial glands in cockroaches are involved in the formation of:",
              "options": [
                "Copulation",
                "Fertilization",
                "The ootheca chamber",
                "The ootheca"
              ],
              "answer": "The ootheca chamber"
            },
            {
              "section": "Biology",
              "topic": "Entomology",
              "question": "Periplaneta americana differs from Blatta orientalis in that it possesses:",
              "options": [
                "Well-developed wings on the body",
                "A wingless body",
                "Only one pair of wings",
                "Only two pairs of wings"
              ],
              "answer": "Well-developed wings on the body"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Gastrointestinal System",
              "question": "Argentaffin cells are most commonly found in:",
              "options": [
                "Pancreas",
                "Internal ear",
                "Gastric glands",
                "Crypts of Lieberkuhn"
              ],
              "answer": "Gastric glands"
            },
            {
              "section": "Biology",
              "topic": "Human Anatomy - Salivary Glands",
              "question": "Stenson’s duct is associated with which salivary gland?",
              "options": [
                "Parotid gland",
                "Sublingual gland",
                "Submandibular gland",
                "Thyroid gland"
              ],
              "answer": "Parotid gland"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Allergies",
              "question": "Which statement regarding hay fever is incorrect?",
              "options": [
                "Rhinitis is another name for hay fever",
                "Hay fever develops due to atopic hypersensitivity to pollen and feathers",
                "Rhinitis is not transmitted by contact but by airborne particles",
                "Hay fever is characterized by runny nose, watery eyes, sneezing, and dry cough"
              ],
              "answer": "Rhinitis is not transmitted by contact but by airborne particles"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Respiratory System",
              "question": "Which of the following statements about emphysema is wrong?",
              "options": [
                "There is increasing breathlessness",
                "The patient may have difficulty walking across a room",
                "Taking air in becomes difficult",
                "Exhaling air is difficult"
              ],
              "answer": "Taking air in becomes difficult"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Cardiovascular System",
              "question": "Cardiac muscles beat rhythmically due to:",
              "options": [
                "External stimuli",
                "Their inherent property",
                "Action of the liver",
                "Action of hormones"
              ],
              "answer": "Their inherent property"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Endocrinology",
              "question": "A lower level of aldosterone secretion results in:",
              "options": [
                "Increased excretion of sodium ions",
                "Decreased excretion of sodium ions",
                "Unchanged sodium excretion",
                "None of these"
              ],
              "answer": "Increased excretion of sodium ions"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Renal Function",
              "question": "Substances such as pigments, antibiotics, hydrogen ions, and urea are primarily excreted by:",
              "options": [
                "Tubular secretion",
                "Reabsorption",
                "Both tubular secretion and reabsorption",
                "None of these"
              ],
              "answer": "Tubular secretion"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Metabolism",
              "question": "A person consuming a protein-rich diet will eliminate increased amounts of which substance?",
              "options": [
                "Urea",
                "Creatinine",
                "Albumin",
                "Glycogen"
              ],
              "answer": "Urea"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Nervous System",
              "question": "Which of the following functions is not regulated by the autonomic nervous system?",
              "options": [
                "Respiration",
                "Blood circulation",
                "Excretion",
                "Learning and memory"
              ],
              "answer": "Learning and memory"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Nervous System",
              "question": "The terminals of the postganglionic fibers in the sympathetic division secrete:",
              "options": [
                "Acetylcholine",
                "Adrenaline",
                "Gastrin",
                "None of these"
              ],
              "answer": "Adrenaline"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Nervous System",
              "question": "In the autonomic nervous system, the postganglionic fibers supplying organs are:",
              "options": [
                "Medullated",
                "Non-medullated",
                "Both medullated and non-medullated",
                "None of these"
              ],
              "answer": "Non-medullated"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Endocrinology",
              "question": "Injury to the adrenal cortex is unlikely to affect the secretion of which hormone?",
              "options": [
                "Cortisol",
                "Aldosterone",
                "Androstenedione and dehydroepiandrosterone",
                "Adrenaline"
              ],
              "answer": "Adrenaline"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Endocrinology",
              "question": "Which hormone is not a steroid hormone?",
              "options": [
                "Androgen",
                "Aldosterone",
                "Testosterone",
                "Vasopressin"
              ],
              "answer": "Vasopressin"
            },
            {
              "section": "Biology",
              "topic": "Human Anatomy - Skeletal System",
              "question": "The zygomatic arch is part of the:",
              "options": [
                "Skull",
                "Vertebra",
                "Sternum",
                "Pelvic girdle"
              ],
              "answer": "Skull"
            },
            {
              "section": "Biology",
              "topic": "Human Anatomy - Vertebrae",
              "question": "In most mammals, vertebrae are:",
              "options": [
                "Acoelous",
                "Procoelous",
                "Heterocoelous",
                "Platycoelous"
              ],
              "answer": "Acoelous"
            },
            {
              "section": "Biology",
              "topic": "Human Anatomy - Skull",
              "question": "Which part of the axis acts as the pivot for the atlas?",
              "options": [
                "Transverse process",
                "Articular process",
                "Odontoid process",
                "Palatine process"
              ],
              "answer": "Odontoid process"
            },
            {
              "section": "Biology",
              "topic": "Genetics",
              "question": "In sweat peas, if both genes C and P are required for flower color and the absence of either results in white flowers, what percentage of colored flowers is expected in the offspring of a cross between Ccpp and ccPp plants?",
              "options": [
                "75%",
                "25%",
                "100%",
                "50%"
              ],
              "answer": "25%"
            },
            {
              "section": "Biology",
              "topic": "Genetics",
              "question": "If a homozygous red‐flowered plant is crossed with a homozygous white‐flowered plant, what is the phenotype of the offspring?",
              "options": [
                "Half white‐flowered",
                "Half red‐flowered",
                "All white‐flowered",
                "All red‐flowered"
              ],
              "answer": "All red‐flowered"
            },
            {
              "section": "Biology",
              "topic": "Genetics",
              "question": "Mendel was unable to deduce recombination because:",
              "options": [
                "He did not have a microscope",
                "He selected only pure lines",
                "The traits he chose were not linked or were on different chromosomes",
                "The traits he chose had no genetic basis"
              ],
              "answer": "The traits he chose were not linked or were on different chromosomes"
            },
            {
              "section": "Biology",
              "topic": "Genetics",
              "question": "Albinism and phenylketonuria are disorders due to:",
              "options": [
                "Recessive autosomal genes",
                "Dominant autosomal genes",
                "Recessive sex‐linked genes",
                "Dominant sex‐linked genes"
              ],
              "answer": "Recessive autosomal genes"
            },
            {
              "section": "Biology",
              "topic": "Conservation Biology",
              "question": "Which plant species is on the verge of extinction due to overexploitation?",
              "options": [
                "Gloriosa",
                "Podophyllum",
                "Ceratella",
                "All of these"
              ],
              "answer": "Podophyllum"
            },
            {
              "section": "Biology",
              "topic": "Ecology",
              "question": "If high‐altitude birds become rare or extinct, which plants are most likely to disappear along with them?",
              "options": [
                "Pine",
                "Oak",
                "Orchids",
                "Rhododendrons"
              ],
              "answer": "Rhododendrons"
            },
            {
              "section": "Biology",
              "topic": "Conservation Biology",
              "question": "If the Bengal tiger becomes extinct, what is the most significant ecological consequence?",
              "options": [
                "Hyenas and wolves will become scarce",
                "Wild areas will be safer for humans and domestic animals",
                "The unique gene pool will be lost forever",
                "Deer populations will stabilize"
              ],
              "answer": "The unique gene pool will be lost forever"
            },
            {
              "section": "Biology",
              "topic": "Evolutionary Biology",
              "question": "Which of the following is considered a vestigial structure in pythons?",
              "options": [
                "Hind limbs",
                "Teeth",
                "Poison glands",
                "Scales"
              ],
              "answer": "Hind limbs"
            },
            {
              "section": "Biology",
              "topic": "Primate Biology",
              "question": "Which monkey species is known for having a prehensile tail?",
              "options": [
                "Spider monkey",
                "Loris",
                "Rhesus monkey",
                "Tarsier"
              ],
              "answer": "Spider monkey"
            },
            {
              "section": "Biology",
              "topic": "Animal Physiology - Adaptations",
              "question": "Camouflage in chameleons is achieved through specialized pigment-containing cells called:",
              "options": [
                "Chromoplasts",
                "Chromosomes",
                "Chromatophores",
                "Chromomeres"
              ],
              "answer": "Chromatophores"
            },
            {
              "section": "Biology",
              "topic": "Entomology - Insect Physiology",
              "question": "Which gland in insects controls both egg production and molting?",
              "options": [
                "Corpus callosum",
                "Corpora allata",
                "Corpora cardiaca",
                "None of these"
              ],
              "answer": "Corpora allata"
            },
            {
              "section": "Biology",
              "topic": "Animal Physiology - Development",
              "question": "Tadpoles can be induced to grow larger by inhibiting the secretion of which hormone?",
              "options": [
                "Thyroid hormone",
                "Feeding them frog eggs",
                "Gonadotrophic hormones",
                "Providing suitable climatic conditions"
              ],
              "answer": "Thyroid hormone"
            },
            {
              "section": "Biology",
              "topic": "Developmental Biology",
              "question": "Meroblastic cleavage refers to:",
              "options": [
                "Incomplete cleavage",
                "Total cleavage",
                "Horizontal cleavage",
                "Spiral cleavage"
              ],
              "answer": "Incomplete cleavage"
            },
            {
              "section": "Biology",
              "topic": "Reproductive Biology - Placenta",
              "question": "The human placenta is classified as:",
              "options": [
                "Hemochorial",
                "Syndesmochorial",
                "Endotheliochorial",
                "Epitheliochorial"
              ],
              "answer": "Hemochorial"
            },
            {
              "section": "Biology",
              "topic": "Reproductive Biology - Oogenesis",
              "question": "Immediately after ovulation, the mammalian egg is covered by a membrane called the:",
              "options": [
                "Chorion",
                "Zona pellucida",
                "Corona radiata",
                "Vitelline membrane"
              ],
              "answer": "Corona radiata"
            },
            {
              "section": "Biology",
              "topic": "Plant Physiology - Calvin Cycle",
              "question": "In the Calvin cycle, which step involves the fixation of carbon dioxide to ribulose-1,5-bisphosphate?",
              "options": [
                "Carboxylation",
                "Reduction",
                "Regeneration",
                "Phosphorylation"
              ],
              "answer": "Carboxylation"
            },
            {
              "section": "Biology",
              "topic": "Molecular Biology - Genetic Code",
              "question": "Which codon in mRNA serves as the start signal for protein synthesis?",
              "options": [
                "AUG",
                "UAA",
                "UGA",
                "UAG"
              ],
              "answer": "AUG"
            },
            {
              "section": "Biology",
              "topic": "Molecular Biology - tRNA Structure",
              "question": "What is the typical secondary structure of transfer RNA (tRNA)?",
              "options": [
                "Cloverleaf structure",
                "Double helix",
                "Beta-sheet",
                "Alpha helix"
              ],
              "answer": "Cloverleaf structure"
            },
            {
              "section": "Biology",
              "topic": "Cell Biology - Electron Transport Chain",
              "question": "Which complex in the mitochondrial electron transport chain is the first to receive electrons from NADH?",
              "options": [
                "Complex I",
                "Complex II",
                "Complex III",
                "Complex IV"
              ],
              "answer": "Complex I"
            },
            {
              "section": "Biology",
              "topic": "Nutrition",
              "question": "Which vitamin is essential for the absorption of calcium in the human body?",
              "options": [
                "Vitamin A",
                "Vitamin B12",
                "Vitamin C",
                "Vitamin D"
              ],
              "answer": "Vitamin D"
            },
            {
              "section": "Biology",
              "topic": "Plant Cell Structure",
              "question": "What is the primary function of the large central vacuole in plant cells?",
              "options": [
                "Protein synthesis",
                "Storage and turgor maintenance",
                "Photosynthesis",
                "Cell division"
              ],
              "answer": "Storage and turgor maintenance"
            },
            {
              "section": "Biology",
              "topic": "Plant Physiology - Water Uptake",
              "question": "Which process is primarily responsible for the uptake of water from the soil in plants?",
              "options": [
                "Transpiration",
                "Osmosis",
                "Active transport",
                "Diffusion"
              ],
              "answer": "Osmosis"
            },
            {
              "section": "Biology",
              "topic": "Human Physiology - Circulatory System",
              "question": "What is the primary function of the coronary arteries in the human circulatory system?",
              "options": [
                "Supply oxygenated blood to the heart muscle",
                "Carry deoxygenated blood from the heart",
                "Supply the brain with blood",
                "Remove waste products from the heart"
              ],
              "answer": "Supply oxygenated blood to the heart muscle"
            },
            {
              "section": "Biology",
              "topic": "Plant Cell Structure",
              "question": "What is the primary component of the plant cell wall?",
              "options": [
                "Cellulose",
                "Chitin",
                "Peptidoglycan",
                "Lignin"
              ],
              "answer": "Cellulose"
            }
          
          
          
            
            
    ]
  }
];
