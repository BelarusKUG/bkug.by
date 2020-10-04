#!/bin/bash

set -e

small_file="${1}";
small_sizes="16 32 57 72 76";

echo "Generating different pngs"

for size in ${small_sizes}; do
  convert "${small_file}" -resize "${size}x${size}" "favicon-${size}.png";
done

big_file="${2}";
big_sizes="114 120 144 152 180 196";

for size in ${big_sizes}; do
  convert "${big_file}" -resize "${size}x${size}" "favicon-${size}.png";
done

echo "Generating favicon.ico"

convert -background transparent "${small_file}" -define icon:auto-resize=16,24,32,48,64 "favicon.ico"
