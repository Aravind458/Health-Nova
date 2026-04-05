import pandas as pd

# Load the original CSV
df = pd.read_csv('urinalysis_tests.csv')

# Columns to correct
columns_to_fix = ['WBC', 'RBC']

# Function to prefix with apostrophe if the value appears to be a range or qualitative term
def force_text(val):
    if pd.isna(val):
        return val
    str_val = str(val)
    if '-' in str_val or '>' in str_val or 'LOADED' in str_val.upper() or 'TNTC' in str_val.upper():
        return "'" + str_val
    return str_val

# Apply the prefix to the specified columns
for col in columns_to_fix:
    df[col] = df[col].apply(force_text)

# Save the corrected CSV (without index column)
df.to_csv('urinalysis_tests_corrected.csv', index=False)

print("Correction complete. The new file 'urinalysis_tests_corrected.csv' is ready.")
print("When opening this file in Excel, the WBC and RBC values will remain as text ranges without date conversion.")