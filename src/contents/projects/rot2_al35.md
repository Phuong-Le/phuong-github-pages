---
title: "Bacterial Genomics: How do we evaluate tools that detect pathogen carriage in metagenomic data?"
---

This is my second rotation at the Sanger institute, under the <a href="https://www.sanger.ac.uk/programme/parasites-and-microbes/">Parasites and Microbes</a> programme. I was supervised by Ste Bentley and Vicky Carr.

Metagenomics is a powerful technique in characterising the microbes present in a sample (like a nasal swab). However, analysing metagenomes is tricky because some microbes, like *Streptococcus pneumoniae*, are easily mistaken for others. I worked on a protocol to evaluate how accurate a tool is at detecting a specific pathogen. The protocol involves both simulated data (which we can completely control) and experimental data (which we can't really control, but it reflects reality)

## Software

Check out the Nextflow pipelines I wrote for this rotation

- <a href="https://github.com/Phuong-Le/metagenome_sim-nf">metagenome_sim-nf</a>: simulates a metagenome given a pool of fasta genome references. 
- <a href="https://github.com/Phuong-Le/bowtie2-nf">bowtie2-nf</a>: a pipeline that wraps bowtie2 alignment and read count summary.
- <a href="https://github.com/Phuong-Le/kraken2-nf">kraken2-nf</a>: a pipeline that wraps the kraken2 taxonomic classification software.

## Acknowledgements

Special thanks to Gerry Tonkin-Hill for the statistical method to simulate metagenomes. Thanks to Luis Gonzalez, Theresa Ochoa, Pablo Tsykayama and Hanson Blake for providing nasopharyngeal swab metagenomic samples.
