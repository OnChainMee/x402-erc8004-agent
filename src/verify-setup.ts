/**
 * Setup Verification Script
 * 
 * This script verifies that your x402 and ERC-8004 setup is correct.
 * Run this before starting the server to ensure everything is configured.
 * 
 * Run with: tsx src/verify-setup.ts
 */

import 'dotenv/config';
import fs from 'fs/promises';

async function verifySetup() {
  console.log('🔍 Verifying x402 & ERC-8004 setup...\n');
  
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check environment variables
  console.log('📋 Checking environment variables...');
  
  if (!process.env.OPENAI_API_KEY) {
    errors.push('OPENAI_API_KEY is not set');
  } else {
    console.log('  ✅ OPENAI_API_KEY is set');
  }

  const payeeAddress = process.env.X402_PAYEE_ADDRESS || '0x50E4D6684a8185b875117cBebB90C72edE1b2819';
  if (!payeeAddress.startsWith('0x') || payeeAddress.length !== 42) {
    errors.push('X402_PAYEE_ADDRESS is not a valid Ethereum address');
  } else {
    console.log(`  ✅ X402_PAYEE_ADDRESS: ${payeeAddress}`);
  }

  const price = process.env.X402_PRICE || '$0.001';
  console.log(`  ✅ X402_PRICE: ${price}`);

  if (!process.env.PRIVATE_KEY) {
    warnings.push('PRIVATE_KEY is not set (needed for ERC-8004 registration)');
  } else {
    console.log('  ✅ PRIVATE_KEY is set');
  }

  if (!process.env.PINATA_JWT) {
    warnings.push('PINATA_JWT is not set (needed for ERC-8004 registration)');
  } else {
    console.log('  ✅ PINATA_JWT is set');
  }

  // Check required files
  console.log('\n📁 Checking required files...');
  
  try {
    const agentCard = await fs.readFile('.well-known/agent-card.json', 'utf-8');
    const cardData = JSON.parse(agentCard);
    console.log('  ✅ .well-known/agent-card.json exists');
    
    if (!cardData.name) {
      warnings.push('Agent card missing name field');
    }
    if (!cardData.endpoints?.a2a) {
      warnings.push('Agent card missing A2A endpoint');
    }
  } catch (e) {
    errors.push('.well-known/agent-card.json is missing or invalid');
  }

  try {
    const registration = await fs.readFile('registration.json', 'utf-8');
    const regData = JSON.parse(registration);
    console.log('  ✅ registration.json exists');
    
    if (!regData.type || !regData.type.includes('eip-8004')) {
      warnings.push('registration.json may not be ERC-8004 compliant');
    }
    
    if (regData.registrations && regData.registrations.length > 0) {
      console.log('  ✅ Agent is registered on ERC-8004');
      regData.registrations.forEach((reg: any) => {
        console.log(`     Agent ID: ${reg.agentId}`);
        console.log(`     Registry: ${reg.agentRegistry}`);
      });
    } else {
      warnings.push('Agent not yet registered on ERC-8004 (run: npm run register)');
    }
  } catch (e) {
    errors.push('registration.json is missing or invalid');
  }

  // Check dependencies
  console.log('\n📦 Checking dependencies...');
  try {
    const packageJson = await fs.readFile('package.json', 'utf-8');
    const pkg = JSON.parse(packageJson);
    
    const requiredDeps = ['x402-express', 'express', 'openai', 'viem', 'uuid'];
    for (const dep of requiredDeps) {
      if (pkg.dependencies?.[dep] || pkg.devDependencies?.[dep]) {
        console.log(`  ✅ ${dep} is installed`);
      } else {
        errors.push(`${dep} is not installed`);
      }
    }
  } catch (e) {
    errors.push('Could not read package.json');
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All checks passed! Your setup is ready.');
    console.log('\n🚀 You can now start the server with: npm run start:a2a');
  } else {
    if (errors.length > 0) {
      console.log('❌ Errors found:');
      errors.forEach(err => console.log(`   - ${err}`));
    }
    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach(warn => console.log(`   - ${warn}`));
    }
    
    if (errors.length > 0) {
      console.log('\n❌ Please fix the errors before starting the server.');
      process.exit(1);
    } else {
      console.log('\n⚠️  Setup has warnings but should work. Review warnings above.');
    }
  }
}

verifySetup().catch(console.error);

