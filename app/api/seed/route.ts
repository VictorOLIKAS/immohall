import { NextResponse } from 'next/server';
import { config } from 'dotenv';
import { Client } from 'pg';
import { LISTINGS } from '@/data/listings';

// 🚀 اقرأ .env.local مباشرة
config({ path: '.env.local' });

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL;

  console.log('DATABASE_URL:', databaseUrl ? '✅ Loaded' : '❌ Missing');

  if (!databaseUrl) {
    return NextResponse.json(
      {
        success: false,
        error: 'DATABASE_URL is missing. Check .env.local',
      },
      { status: 500 }
    );
  }

  const client = new Client({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    // حذف البيانات القديمة
    await client.query('DELETE FROM listings');

    // إدخال البيانات الجديدة
    for (const listing of LISTINGS) {
      await client.query(
        `INSERT INTO listings (
          slug, title, description, type, category, transaction,
          property_type, is_off_market, price, surface, rooms, beds,
          city, postal_code, location, badge_label, badge_color,
          images, dpe, ges, charges, taxe_fonciere, features,
          status, views, leads_count, published_at,
          agent_name, agent_title, agent_is_team
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,
          $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23,
          $24, $25, $26, $27, $28, $29, $30
        )`,
        [
          listing.slug,
          listing.title,
          listing.description,
          listing.type,
          listing.category,
          listing.transaction,
          listing.propertyType,
          listing.isOffMarket || false,
          listing.price,
          listing.surface,
          listing.rooms,
          listing.beds,
          listing.city,
          listing.postalCode,
          listing.location,
          listing.badge.label,
          listing.badge.color,
          listing.images,
          listing.dpe,
          listing.ges,
          listing.charges,
          listing.taxeFonciere,
          listing.features,
          listing.status,
          listing.views,
          listing.leadsCount,
          listing.publishedAt || null,
          listing.agent.name,
          listing.agent.title,
          listing.agent.isTeam,
        ]
      );
    }

    await client.end();

    return NextResponse.json({
      success: true,
      message: `✅ ${LISTINGS.length} listings imported successfully!`,
      count: LISTINGS.length,
    });
  } catch (err: any) {
    console.error('Error:', err);
    try {
      await client.end();
    } catch {}
    return NextResponse.json(
      {
        success: false,
        error: err.message || String(err),
        stack: err.stack || 'No stack',
        code: err.code || 'No code',
        detail: err.detail || 'No detail',
      },
      { status: 500 }
    );
  }
}